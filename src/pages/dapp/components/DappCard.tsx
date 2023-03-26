import { NextPage } from "next";
import { ref } from "firebase/storage";
import { fireStorage, fireStore } from "@/modules/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import Link from "next/link";

interface Props {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  tagList: string[];
}

const DappCard: NextPage<Props> = ({
  id,
  imgUrl,
  name,
  description,
  tagList,
}) => {
  const storageRef = ref(fireStorage);

  const [DappPhoto, loading] = useDownloadURL(ref(storageRef, `${imgUrl}`));

  return (
    <Link
      href={`/dapp/${id}`}
      className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg hover:cursor-pointer"
    >
      <img
        className="w-full"
        src={loading ? "/og.png" : DappPhoto}
        alt={imgUrl}
      />
      <div className="p-4">
        <p className="font-bold text-xl">{name}</p>
        <span className="text-gray-500 text-sm">{description}</span>
      </div>
      <div className="flex justify-between px-2 pb-2">
        <div>
          {tagList &&
            tagList.map((data, key) => (
              <span
                key={key}
                className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {data}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default DappCard;
