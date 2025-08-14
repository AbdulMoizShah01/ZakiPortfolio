const DecorationSVG = ({ position }) => {
  const getPath = (pos) => {
    switch(pos) {
      case 'top-left':
        return "M10,0 L30,0 M0,10 L0,30";
      case 'top-right':
        return "M40,0 L20,0 M50,10 L50,30";
      case 'bottom-left':
        return "M10,50 L30,50 M0,40 L0,20";
      case 'bottom-right':
        return "M40,50 L20,50 M50,40 L50,20";
      default:
        return "";
    }
  };

  return (
    <svg 
      className={`corner-decoration ${position}`} 
      width="50" 
      height="50"
      style={{
        position: 'absolute',
        [position.includes('left') ? 'left' : 'right']: '0',
        [position.includes('top') ? 'top' : 'bottom']: '0'
      }}
    >
      <path 
        d={getPath(position)} 
        stroke="#2c3e50" 
        strokeWidth="2" 
        fill="none"
      />
    </svg>
  );
};

export default DecorationSVG;