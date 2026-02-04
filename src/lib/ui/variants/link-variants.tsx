/**
 * link-variants.tsx
 *
 * Design System Variant Configuration for Link Primitive
 *
 * ------------------------------------------------------------
 * PURPOSE
 * ------------------------------------------------------------
 * Defines the styling contract for the Link primitive using
 * Class Variance Authority (CVA).
 *
 * This file centralizes:
 *
 * • Visual variants (what role the link plays)
 * • Size variants (interaction density & rhythm)
 * • Layout variants (structural behavior)
 * • State variants (UI state such as active)
 *
 * This allows components to remain declarative while ensuring
 * consistent styling across the application.
 *
 *
 * ------------------------------------------------------------
 * DESIGN SYSTEM RESPONSIBILITIES
 * ------------------------------------------------------------
 *
 * CVA handles STYLE LOGIC only.
 * It does NOT compute UI state or routing awareness.
 *
 * Component wrappers (ex: DashboardLink) are responsible for:
 *   • Determining runtime state (active, selected, etc.)
 *   • Passing that state into the Link primitive
 *
 * The Link primitive is responsible for:
 *   • Forwarding variant props into CVA
 *
 *
 * ------------------------------------------------------------
 * VARIANT TYPES
 * ------------------------------------------------------------
 *
 * 1. Visual Variants ("variant")
 *
 * Define the semantic role of the link:
 *
 * • default → standard inline link
 * • primary → emphasized / CTA link
 * • nav → navigation link used in sidebars, menus, etc.
 *
 * Variants represent WHAT the component is.
 * They should remain static design choices.
 *
 *
 * 2. Size Variants ("size")
 *
 * Controls:
 * • Vertical rhythm
 * • Padding / click target size
 * • Typography scale
 *
 * Size variants are built from primitive tokens:
 *   size.height + typography adapters
 *
 *
 * 3. Layout Variants ("layout")
 *
 * Controls structural behavior such as:
 *
 * • inline → flows within text or flex row
 * • fullWidth → expands to container width (navigation lists)
 *
 *
 * 4. State Variants ("active")
 *
 * Represents UI state.
 *
 * CVA does NOT determine state — it only styles when state
 * is provided by the calling component.
 *
 * Example:
 * DashboardLink determines if a route is active and passes:
 *
 *   <Link active={isActive} />
 *
 *
 * ------------------------------------------------------------
 * defaultVariants
 * ------------------------------------------------------------
 *
 * Provides fallback values when variant props are omitted.
 *
 * Ensures:
 * • Consistent baseline styling
 * • Predictable design system behavior
 * • Reduced prop noise in consumers
 *
 * IMPORTANT:
 * defaultVariants DO NOT apply conditional styling.
 * They simply define default prop values.
 *
 * defaultVariants: { active: false }
 * active: false, otherwise CVA treats active as undefined,
 * which can cause inconsistent compound matching.
 *
 * ------------------------------------------------------------
 * compoundVariants
 * ------------------------------------------------------------
 *
 * Applies styling when MULTIPLE variant conditions are met.
 *
 * Used to encode design rules such as:
 *
 *   "Navigation links should visually highlight when active"
 *
 * Example:
 *
 *   variant = "nav"
 *   AND
 *   active = true
 *
 * → Apply highlighted navigation styling
 *
 * compoundVariants allow complex styling logic to live inside
 * the design system instead of being scattered across components.
 *
 *
 * ------------------------------------------------------------
 * ARCHITECTURAL BENEFITS
 * ------------------------------------------------------------
 *
 * • Separates styling rules from component logic
 * • Enables consistent state styling across features
 * • Allows domain wrappers (DashboardLink, etc.) to remain thin
 * • Supports future expansion (selected, expanded, loading states)
 *
 *
 * ------------------------------------------------------------
 * MAINTENANCE GUIDELINES
 * ------------------------------------------------------------
 *
 * ✔ Add new visual roles inside `variant`
 * ✔ Add new interaction density options inside `size`
 * ✔ Add structural behaviors inside `layout`
 * ✔ Add UI state styling via `compoundVariants`
 *
 * ❌ Do NOT compute runtime logic here
 * ❌ Do NOT reference routing, permissions, or business rules
 * ❌ Do NOT mix component layout logic with primitives
 *
 */

import { cva, type VariantProps } from 'class-variance-authority';
import { linkTokens } from '../tokens/components/link-tokens';

export const linkVariants = cva(
  'font-medium transition-colors inline-flex items-center',
  {
    variants: {
      variant: {
        default: linkTokens.default.base,
        primary: linkTokens.primary.base,
        nav: linkTokens.nav.base,
      },

      size: linkTokens.size,

      layout: linkTokens.layout,

      /**
       * State variant
       *
       * Must exist to allow compoundVariants to react to active state.
       * Even if no direct classes are assigned here, CVA requires
       * variant keys to exist.
       */
      active: {
        true: '',
        false: '',
      },
    },

    /**
     * Provides baseline styling when props are omitted.
     */
    defaultVariants: {
      variant: 'default',
      size: 'md',
      layout: 'inline',
      active: false,
    },

    /**
     * Encodes state styling rules for navigation links.
     *
     * When a navigation link is active, apply highlight styling.
     */
    compoundVariants: [
      {
        variant: 'nav',
        active: true,
        className: 'bg-muted font-medium',
      },
    ],
  },
);

export type LinkVariants = VariantProps<typeof linkVariants>;
