import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Index() {
  const session = useSession();

  return (
    <div className="flex justify-center items-center">
      <Button onClick={() => signIn("google")} variant={"link"}>
        Sign In
      </Button>
    </div>
  );
}
