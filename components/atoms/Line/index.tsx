import React, { ReactNode } from 'react'

export type LineProps = {
}

const Line = (line: LineProps) => {

  return (
    <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        {/* <span className="flex-shrink mx-4 text-gray-400">Content</span> */}
        <div className="flex-grow border-t border-gray-400"></div>
    </div>
  )
}

export default Line;