import Link from "next/link";
import React from "react";
import Image from "next/image";

const Card = ({ result }) => {
  return (
    <div className='border-2'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmbd.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt={result.title}
          className="sm:rounded-t-lg"
        />
      </Link>
    </div>
  );
};

export default Card;
