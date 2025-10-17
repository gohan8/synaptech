import React from "react";

const SimpleList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className="text-gray-300 text-sm text-left list-disc list-inside space-y-1">

      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default SimpleList;