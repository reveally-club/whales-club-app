import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { fireStore } from "@/modules/firebase";
import Loading from "../common/Loading";
import Layout from "../common/Layout";
import CoinCard from "./components/CoinCard";

export default function Coin() {
  const [value, loading] = useCollection(
    query(collection(fireStore, "chain"), orderBy("createdAt", "desc")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Layout>
      <section className="mt-8 flex flex-col w-full items-center">
        <h2 className="text-4xl">Coin</h2>
        <h3 className="mt-2 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
          코인 정보로 투자기회를 얻어보세요.
        </h3>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          {loading ? <Loading /> : <div />}
          {value?.docs.map((doc, key) => (
            <CoinCard
              key={key}
              id={doc.id}
              imgUrl={doc.data().imgUrl}
              name={doc.data().name}
              description={doc.data().description}
              tagList={doc.data().tagList}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
