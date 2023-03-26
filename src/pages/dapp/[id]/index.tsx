import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { fireStore } from "@/modules/firebase";
import { doc } from "firebase/firestore";
import Layout from "@/pages/common/Layout";

type DappDetailType = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  content: string;
  tagList: string[];
};

export default function DappDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loading, error] = useDocument(
    doc(fireStore, "dapp", `${id}`)
  );

  const value = snapshot?.exists && (snapshot.data() as DappDetailType);

  return (
    <Layout>
      <section className="mt-8 flex flex-col w-full items-center">
        <h2 className="text-4xl">{value?.name}</h2>
        <h3 className="mt-2 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
          {value?.description}
        </h3>
        <iframe className="mt-4 w-full h-64" src={value?.content} />
        <div className="flex justify-between px-2 pb-2">
          <div>
            {value?.tagList &&
              value?.tagList.map((data, key) => (
                <span
                  key={key}
                  className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {data}
                </span>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
