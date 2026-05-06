/**
 * Composes two event handlers into a single handler.
 *
 * Execution order:
 * 1. `theirHandler` (consumer / user-defined)
 * 2. `ourHandler` (internal logic), only if the event was not prevented
 *
 * This allows consumers to override internal behavior by calling
 * `event.preventDefault()` in their handler.
 *
 * Commonly used in primitives (Dropdown, Collapsible, etc.) to ensure:
 * - user-provided handlers are always respected
 * - internal behavior does not override consumer intent
 *
 * @param theirHandler - External handler passed by the consumer (e.g. props or child)
 * @param ourHandler - Internal handler (e.g. toggle, open, close logic)
 * @returns A composed event handler
 */
export function composeEventHandlers<E extends { defaultPrevented?: boolean }>(
  theirHandler?: (event: E) => void,
  ourHandler?: (event: E) => void
) {
  return (event: E) => {
    theirHandler?.(event);

    // Only run internal logic if the event wasn't cancelled
    if (!event.defaultPrevented) {
      ourHandler?.(event);
    }
  };
}