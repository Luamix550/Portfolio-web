import React from "react";
import { User, Link } from "@nextui-org/react";

export default function App() {
  return (
    <div style={{ color: "#FFFFFF" }}>
      <User
        name={<span style={{ color: "#FFFFFF" }}>Luis Diaz</span>}
        description={(
          <Link href="https://github.com/Luamix550" size="sm" isExternal>
            @Luamix550
          </Link>
        )}
        avatarProps={{
          src: "https://i.imgur.com/Z1bxfnC.jpeg"
        }}
      />
    </div>
  );
}
