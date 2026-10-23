export const WHATSAPP_NUMBER = "541168754147";
export const WHATSAPP_DISPLAY = "+54 11 6875-4147";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
