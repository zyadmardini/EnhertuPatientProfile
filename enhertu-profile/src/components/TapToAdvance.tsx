interface TapToAdvanceProps {
  onTap: () => void;
  excludeAreas?: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}

export default function TapToAdvance({ onTap, excludeAreas = [] }: TapToAdvanceProps) {
  const handleClick = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if click is in any excluded area
    for (const area of excludeAreas) {
      if (
        x >= area.x &&
        x <= area.x + area.width &&
        y >= area.y &&
        y <= area.y + area.height
      ) {
        return; // Don't trigger navigation if click is in excluded area
      }
    }

    onTap();
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 50, // Lower than navigation buttons (zIndex: 100) but higher than content
        cursor: 'pointer',
        backgroundColor: 'transparent',
      }}
      onClick={handleClick}
    />
  );
}
