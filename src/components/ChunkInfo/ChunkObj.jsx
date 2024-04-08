/* eslint-disable react/prop-types */
const ChunkObj = ({ obj }) => {
  const category = Object.keys(obj)[0];
  const entriesArr = Object.entries(obj[category]);

  return (
    <div>
      <h3>{Object.keys(obj)[0]}</h3>
      {entriesArr.map((item) => (
        <p key={item[0] + item[1]}>
          {item[0]}:{item[1]}
        </p>
      ))}
    </div>
  );
};

export default ChunkObj;
