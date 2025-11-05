import { HrDivider } from "./HrDivider";

export function Footer() {
  return (
    <footer className="w-full py-4 text-center mt-10">
      <HrDivider className="mb-4" />
      <span className="text-white text-sm">
        © {new Date().getFullYear()} | Tarolando
      </span>
    </footer>
  );
}
