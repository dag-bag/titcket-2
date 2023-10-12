import QRCode from "react-qr-code";

export default function Id({ id }: any) {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <QRCode value={id} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}
