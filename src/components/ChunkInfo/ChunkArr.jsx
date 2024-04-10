/* eslint-disable react/prop-types */
import styles from "./Chunk.module.css";

const ChunkArr = ({ arr, typeInfo }) => {
  return (
    <div className={styles.chunkWrp}>
      <h3 className={styles.chunkTitle}>{typeInfo}:&nbsp;&nbsp;</h3>
      <div>
        {arr[typeInfo].map((item, ind) => (
          <p key={ind + item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ChunkArr;
