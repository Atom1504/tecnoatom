import { WhatsAppIcon } from "@/components/ui-custom/WhatsAppIcon";
import { CONTACT } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-elegant transition hover:-translate-y-0.5 hover:brightness-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default WhatsAppButton;
