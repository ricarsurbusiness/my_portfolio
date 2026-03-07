/**
 * Modal Event System
 * Handles custom events for project detail modal open/close operations
 */

export interface ProjectModalOpenEvent extends CustomEvent {
  detail: {
    projectId: string;
  };
}

export interface ProjectModalCloseEvent extends CustomEvent {
  detail?: Record<string, never>;
}

/**
 * Dispatch event to open the project detail modal
 * @param projectId - ID of the project to display
 */
export function openModal(projectId: string): void {
  const event = new CustomEvent<{ projectId: string }>("project-modal:open", {
    detail: { projectId },
    bubbles: true,
    composed: true,
  });
  document.dispatchEvent(event);
}

/**
 * Dispatch event to close the project detail modal
 */
export function closeModal(): void {
  const event = new CustomEvent("project-modal:close", {
    bubbles: true,
    composed: true,
  });
  document.dispatchEvent(event);
}
