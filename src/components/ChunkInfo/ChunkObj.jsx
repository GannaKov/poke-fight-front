/* eslint-disable react/prop-types */
const ChunkObj = ({ obj, typeInfo }) => {
  // const category = Object.keys(obj)[0];
  const entriesArr = Object.entries(obj[typeInfo]);

  return (
    <div>
      <h3>{typeInfo}:</h3>
      {entriesArr.map((item) => (
        <p key={item[0] + item[1]}>
          {item[0]}:{item[1]}
        </p>
      ))}
    </div>
  );
};

export default ChunkObj;
