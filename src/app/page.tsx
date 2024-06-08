import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-col items-center">
        <Button>HELLO There</Button>
        <Card>
          <img
            src="https://wallpaperaccess.com/full/930661.jpg"
            width={200}
            height={200}
            alt="card-image"
          />
        </Card>
      </div>
    </div>
  );
}
