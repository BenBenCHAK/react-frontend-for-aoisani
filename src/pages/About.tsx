type Misc = {
    aboutme: string[];
    copyright: string;
};

interface Props {
    misc?: Misc;
    error: any;
}

export function About({misc, error}: Props) {
  return (
    <>
      <h1 className="mb-4">About me</h1>
      {error != null && misc?.aboutme.map((item: string, id: number) => <p key={id}>{item}</p>)}
    </>
  );
}
