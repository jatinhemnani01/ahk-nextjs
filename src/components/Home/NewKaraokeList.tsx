import useFetch from "@/hooks/useFetch";
import BASE_URL from "@/constants/BASE_URL";
import KaraokeTile from "../main/KaraokeTile";
import { useEffect, useState } from "react";

export default function NewKaraokeList() {
  const { data, error, loading } = useFetch(`${BASE_URL}/v2/new_karaoke`);
  const [newKaraoke, setNewKaraoke] = useState<any>(data);

  useEffect(() => {
    setNewKaraoke(data?.splice(0, 5));
  }, [data]);

  return (
    <>
      <div className="flex flex-col">
        {newKaraoke?.map((item: any, i: number) => {
          return (
            <KaraokeTile key={i} title={item.title} INR={299} USD={4.99} />
          );
        })}
      </div>
    </>
  );
}
