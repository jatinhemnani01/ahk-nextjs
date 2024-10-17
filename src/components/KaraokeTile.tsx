import { Music, DollarSign, IndianRupee } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  songName: string;
  artist: string;
  USD: number;
  INR: number;
}

export default function KaraokeTile({ INR, USD, artist, songName }: Props) {
  return (
    <li className="p-3 rounded-lg hover:bg-muted transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <Music className="h-5 w-5 text-muted-foreground" />
          <div>
            <span className="font-medium">{songName}</span>
            <span className="text-sm text-muted-foreground ml-2">{artist}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-green-600">
            <DollarSign className="h-4 w-4 " />
            {USD}
          </Button>
          <Button variant="outline" size="sm" className="text-blue-600">
            <IndianRupee className="h-4 w-4 " />
            {INR}
          </Button>
        </div>
      </div>
    </li>
  );
}
