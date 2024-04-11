/* eslint-disable react/prop-types */
import styles from "./Chunk.module.css";

const ChunkObj = ({ obj, typeInfo }) => {
 
  const entriesArr = Object.entries(obj[typeInfo]);

  return (
    <div className={styles.chunkWrp}>
      <h3 className={styles.chunkTitle}>{typeInfo}:&nbsp;&nbsp;</h3>
      <div>
        {entriesArr.map((item) => (
          <p key={item[0] + item[1]}>
            {item[0]}:{item[1]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChunkObj;
