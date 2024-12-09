export const Teaser = ({ blok }: any) => {
  return (
    <>
      <pre>{JSON.stringify(blok, null, 2)}</pre>;
    </>
  );
};
