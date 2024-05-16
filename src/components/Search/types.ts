import { ChangeEvent, FormEvent } from "react";

export interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
