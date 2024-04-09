/* eslint-disable react/prop-types */
const ChunkArr = ({ obj, typeInfo }) => {
  return (
    <div>
      <h3>{typeInfo}:</h3>
      {obj[typeInfo].map((item, ind) => (
        <p key={ind + item}>{item}</p>
      ))}
    </div>
  );
};

export default ChunkArr;
