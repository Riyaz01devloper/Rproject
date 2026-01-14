function SkillCard({
  title,
  level,
  progress,
  onDelete,
  onIncrease,
  onDecrease, 
}) {
    return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-center">
     
      

 {/* Title and Delete */}     
  </div>
    <div className="flex justify-between items-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <button
          onClick={onDelete}
          className="text-xs text-red-500 hover:underline" >
          Delete
        </button>
      </div>
       

      {/* Level badge */}
      <span className = "inline-block mt-2 text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
        {level}
      </span>

      {/* Progress bar */}
      <div className="mt-6">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        

        <p className="text-sm text-gray-600 mt-2 text-right">
          {progress}% Completed
        </p>

        {/* Controls */}
        <div className="flex items-center justify-end gap-3 mt-3">
          <button
            onClick={onDecrease}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400"
          >
            − 
          </button>

          <button
            onClick={onIncrease}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default SkillCard
