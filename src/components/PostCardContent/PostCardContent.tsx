import Link from 'next/link';

interface PostCardContentProps {
  postData: string;
}

const PostCardContent = ({ postData }: PostCardContentProps) => {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((hash, index) => {
        if (hash.match(/(#[^\s#]+)/)) {
          return (
            <Link key={`${hash}+ ${index}`} href={`/hashtag/${hash.slice(1)}`}>
              <a>{hash}</a>
            </Link>
          );
        }
        return hash;
      })}
    </div>
  );
};

export default PostCardContent;
