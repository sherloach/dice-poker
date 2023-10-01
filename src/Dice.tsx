interface IDice {
  diceFace: number | undefined
}

const Dice = ({ diceFace }: IDice) => {
  let x = 45, y = 45;

  if (!!diceFace) {
    switch (diceFace) {
      case 1:
        x = 720;
        y = 810;
        break;
      case 6:
        x = 720;
        y = 990;
        break;
      default:
        x = 720 + (6 - diceFace) * 90;
        y = 900;
        break;
    }
  }

  return (
    <div className="w-[200px] h-[200px] absolute -translate-x-2/4 -translate-y-2/4 rounded-[10px] left-2/4 top-[30%]" style={{ perspective: '400px' }}>
      <div className="h-48 w-48 relative" style={{ transformStyle: 'preserve-3d', transition: 'transform 1s', transform: `translateZ(-100px) rotateY(${x}deg) rotateX(${y}deg)` }}>
        <div className="side flex justify-center items-center z-[1]" style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}>
          <span className="dot" />
        </div>
        <div className="side flex justify-between z-[2]" style={{ transform: 'rotateY(180deg) translateZ(100px)' }}>
          <span className="dot" />
          <span className="dot self-end" />
        </div>
        <div className="side flex justify-between z-[3]" style={{ transform: 'rotateY(90deg) translateZ(100px)' }}>
          <span className="dot" />
          <span className="dot self-center" />
          <span className="dot self-end" />
        </div>
        <div className="side flex justify-between z-[4]" style={{ transform: 'rotateY(0deg) translateZ(100px)' }}>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
        <div className="side flex justify-between z-[5]" style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="dot" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
        <div className="side flex justify-between z-[6]" style={{ transform: 'rotateX(90deg) translateZ(100px)' }}>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dice;
