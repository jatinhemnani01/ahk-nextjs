'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Play } from "lucide-react"

interface AlbumCardProps {
  artist: string;
}

export function MusicAlbumCard({ artist = "Harry Styles"}: AlbumCardProps) {
  return (
    <Card className="w-[200px] md:w-[250px] overflow-hidden">
      <CardContent className="p-0 cursor-pointer">
        <div className="relative group">
          <div className="aspect-square bg-primary flex items-center justify-center p-4">
            <span className="text-2xl font-bold text-primary-foreground text-center">{artist}</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <Button className="w-full">Explore</Button>
      </CardFooter>
    </Card>
  )
}