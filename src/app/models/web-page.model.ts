export interface WebPage {
  id: number; // El signo de interrogación indica que el campo es opcional
  url: string;
  title?: string; // Opcional
  description?: string; // Opcional
  enabled: boolean;


}
