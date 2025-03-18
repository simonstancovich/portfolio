import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

/**
 * Configuration
 */
const PIECE_SIZE = 100; // Each piece is 100px by 100px

// Helper functions to compute full image dimensions from grid dimensions.
const getImageWidth = (columns: number) => columns * PIECE_SIZE;
const getImageHeight = (rows: number) => rows * PIECE_SIZE;

/**
 * Styled Components
 */
interface PuzzleContainerProps {
  rows: number;
  columns: number;
}

const PuzzleContainer = styled.div<PuzzleContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  width: ${(props) => getImageWidth(props.columns)}px;
  height: ${(props) => getImageHeight(props.rows)}px;
  margin: 20px auto;
  border: 2px solid #333;
  position: relative;
`;

interface PieceDivProps {
  backgroundImage: string;
  backgroundPosition: string;
  backgroundSize: string;
}

const PieceDiv = styled.div<PieceDivProps>`
  width: ${PIECE_SIZE}px;
  height: ${PIECE_SIZE}px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  border: 1px solid #fff;
  box-sizing: border-box;
  user-select: none;
`;

/**
 * PuzzlePiece Component
 *
 * Each piece uses the same full image as its background.
 * Its CSS background-position is calculated so that it shows only the correct segment.
 */
interface PuzzlePieceProps {
  id: number;
  rows: number;
  columns: number;
  imageUrl: string;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  id,
  rows,
  columns,
  imageUrl,
}) => {
  // useSortable makes the component draggable and provides the necessary props.
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  // In the solved puzzle, piece id "0" belongs in the top‑left,
  // and generally piece "i" belongs at row = floor(i/columns) and col = i % columns.
  const solvedRow = Math.floor(id / columns);
  const solvedCol = id % columns;

  // The full image is (columns * PIECE_SIZE) × (rows * PIECE_SIZE)
  const fullImageWidth = getImageWidth(columns);
  const fullImageHeight = getImageHeight(rows);

  // For each piece, we want to show only its segment.
  // Compute the background-size so that the entire image fits exactly in the grid.
  const backgroundSize = `${fullImageWidth}px ${fullImageHeight}px`;
  // Compute the background position to shift the image.
  const backgroundPosition = `-${solvedCol * PIECE_SIZE}px -${
    solvedRow * PIECE_SIZE
  }px`;

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      <PieceDiv
        backgroundImage={imageUrl}
        backgroundSize={backgroundSize}
        backgroundPosition={backgroundPosition}
      />
    </div>
  );
};

/**
 * PuzzleChallenge Component
 *
 * This component fetches a random image from Unsplash,
 * initializes the puzzle pieces in a scrambled order,
 * and sets up the drag-and-drop context using @dnd-kit.
 *
 * When the pieces are arranged in the correct order, the phone number is revealed.
 */
interface PuzzleChallengeProps {
  rows: number;
  columns: number;
}

const PuzzleChallenge: React.FC<PuzzleChallengeProps> = ({ rows, columns }) => {
  const totalPieces = rows * columns;
  const [pieces, setPieces] = useState<number[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isSolved, setIsSolved] = useState<boolean>(false);

  // 1. Fetch a random image from Unsplash on component mount.
  useEffect(() => {
    const fullWidth = getImageWidth(columns);
    const fullHeight = getImageHeight(rows);
    const unsplashUrl = `https://api.unsplash.com/photos/random/?orientation=squarish&client_id=4gazYqeso80aQEScnItsOO8CWDEP1GR51tAKq25eIfQ`;
    fetch(unsplashUrl)
      .then((res) => res.json())
      .then((data) => {
        const rawUrl: string = data.urls.raw;
        const finalUrl = rawUrl.includes("?")
          ? `${rawUrl}&w=${fullWidth}&h=${fullHeight}`
          : `${rawUrl}?w=${fullWidth}&h=${fullHeight}`;
        setImageUrl(finalUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [columns, rows]);

  // 2. Initialize and scramble puzzle pieces.
  useEffect(() => {
    const solvedOrder = Array.from({ length: totalPieces }, (_, i) => i);
    const scrambled = [...solvedOrder].sort(() => Math.random() - 0.5);
    setPieces(scrambled);
  }, [totalPieces]);

  // 3. Check for puzzle completion.
  useEffect(() => {
    const solvedOrder = Array.from({ length: totalPieces }, (_, i) => i);
    const solved = pieces.every((piece, index) => piece === solvedOrder[index]);
    setIsSolved(solved);
  }, [pieces, totalPieces]);

  // 4. Set up dnd-kit sensors (PointerSensor supports both mouse and touch).
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    })
  );

  // 5. Handle drag end: swap the positions of the dragged piece and the piece it was dropped over.
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = pieces.indexOf(active.id as number);
    const newIndex = pieces.indexOf(over.id as number);
    setPieces((prevPieces) => {
      const newPieces = [...prevPieces];
      // Swap the two pieces.
      [newPieces[oldIndex], newPieces[newIndex]] = [
        newPieces[newIndex],
        newPieces[oldIndex],
      ];
      return newPieces;
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Rearrange the puzzle to reveal my phone number!
      </h2>
      {imageUrl && pieces.length > 0 ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={pieces} strategy={rectSortingStrategy}>
            <PuzzleContainer rows={rows} columns={columns}>
              {pieces.map((pieceId) => (
                <PuzzlePiece
                  key={pieceId}
                  id={pieceId}
                  rows={rows}
                  columns={columns}
                  imageUrl={imageUrl}
                />
              ))}
            </PuzzleContainer>
          </SortableContext>
        </DndContext>
      ) : (
        <p style={{ textAlign: "center" }}>Loading puzzle...</p>
      )}
      {isSolved && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>My phone number: +46 734 200 137</h3>
        </div>
      )}
    </div>
  );
};

export default PuzzleChallenge;
