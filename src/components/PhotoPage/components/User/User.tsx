import { FotoInfoTypes } from "../../types";

export const User = ({ user }: Pick<FotoInfoTypes, "user">) => {
  const { name, profile_image } = user;
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
      }}
    >
      <img css={{ borderRadius: "50%" }} src={profile_image.small} alt={name} />
      {name}
    </div>
  );
};
