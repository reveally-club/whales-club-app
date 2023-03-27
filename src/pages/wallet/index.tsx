import Layout from "../common/Layout";

export default function Wallet() {
  return (
    <Layout>
      <section className="mt-8 flex flex-col w-full items-center">
        <h2 className="text-4xl">Wallet</h2>
        <h3 className="mt-2 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
          고래의 지갑을 추적하고 투자 기회를 얻어보세요.
        </h3>
      </section>
    </Layout>
  );
}
