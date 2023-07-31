export default function Avatar({userId,username,online}) {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-blue-500', 'bg-yellow-500', 'bg-orange-500'];
    const userIdBase10 = parseInt(userId.substring(10), 16);
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex];

    return (
      <div className={"w-8 h-8 relative rounded-full flex items-center "+color}>
        <div className="text-center text-white uppercase w-full opacity-85">{username[0]}</div>
        {online && (
          <div className="absolute w-3 h-3 bg-green-400 bottom-0 left-0 rounded-full border border-black"></div>
        )}
        {!online && (
          <div className="absolute w-3 h-3 bg-gray-300 bottom-0 left-0 rounded-full border border-black"></div>
        )}
      </div>
    );
  }