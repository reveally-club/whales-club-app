import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { fireStore } from "@/modules/firebase";
import { doc } from "firebase/firestore";
import Layout from "@/pages/common/Layout";

type CoinDetailType = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  content: string;
  investment: string;
  dapp: {
    defi: string;
    nft: string;
    bridge: string;
  };
  chainInfo: {
    icon: string;
    mainnetId: number;
  };
  tagList: string[];
};

export default function CoinDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loading, error] = useDocument(
    doc(fireStore, "chain", `${id}`)
  );

  const value = snapshot?.exists && (snapshot.data() as CoinDetailType);

  return (
    <Layout>
      <section className="mt-8 flex flex-col w-full items-center">
        <article className="w-full flex flex-col gap-12 mt-8">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold mb-2">체인 정보</h3>
            <div className="flex gap-2">
              <img
                className="w-6"
                src={value?.chainInfo.icon}
                alt={value?.name}
              />
              <h2 className="text-lg">{value?.name}</h2>
            </div>
            <h3 className="mt-2 text-sm text-gray-700">{value?.description}</h3>
            {/* <button className="mt-4 w-full flex justify-center rounded-lg py-3 font-semibold text-gray-800  bg-gradient-to-r from-sky-50 to-violet-50 hover:from-sky-100 hover:to-violet-100">
              Add to Metamask
            </button> */}
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">투자 금액</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">DApp 순위</h3>
            {value?.dapp.defi !== "" && (
              <div className="mt-4">
                <h4 className="text-xl">DeFi</h4>
                <iframe className="mt-4 w-full h-64" src={value?.dapp.defi} />
              </div>
            )}
            {value?.dapp.nft !== "" && (
              <div className="mt-4">
                <h4 className="text-xl">NFT</h4>
                <iframe className="mt-4 w-full h-64" src={value?.dapp.nft} />
              </div>
            )}
            {value?.dapp.bridge !== "" && (
              <div className="mt-4">
                <h4 className="text-xl">bridge</h4>
                <iframe className="mt-4 w-full h-64" src={value?.dapp.bridge} />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full px-2 pb-2 text-cetner justify-center">
            <h3 className="text-3xl font-semibold">태그</h3>
            <div className="flex gap-2 mt-4">
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
        </article>
      </section>
    </Layout>
  );
}
