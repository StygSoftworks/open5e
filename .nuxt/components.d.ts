
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppFooter: typeof import("../app/components/AppFooter.vue").default
export const BreadcrumbLinks: typeof import("../app/components/BreadcrumbLinks.vue").default
export const ClassTable: typeof import("../app/components/ClassTable.vue").default
export const CrossLink: typeof import("../app/components/CrossLink.global.vue").default
export const EncounterBuilder: typeof import("../app/components/EncounterBuilder.vue").default
export const EncounterBuilderMonsterSearch: typeof import("../app/components/EncounterBuilderMonsterSearch.vue").default
export const EncounterBuilderPartyBuilder: typeof import("../app/components/EncounterBuilderPartyBuilder.vue").default
export const EncounterBuilderSummary: typeof import("../app/components/EncounterBuilderSummary.vue").default
export const InlineRoller: typeof import("../app/components/InlineRoller.global.vue").default
export const LinkPreview: typeof import("../app/components/LinkPreview.vue").default
export const MdViewer: typeof import("../app/components/MdViewer.vue").default
export const Modal: typeof import("../app/components/Modal.vue").default
export const ModalReportIssue: typeof import("../app/components/ModalReportIssue.vue").default
export const ModalSourceSelector: typeof import("../app/components/ModalSourceSelector.vue").default
export const MonsterAbilities: typeof import("../app/components/MonsterAbilities.vue").default
export const Navigation: typeof import("../app/components/Navigation.vue").default
export const PageNotifications: typeof import("../app/components/PageNotifications.vue").default
export const ResultsTable: typeof import("../app/components/ResultsTable.vue").default
export const ResultsTableFilter: typeof import("../app/components/ResultsTableFilter.vue").default
export const ResultsTableHeader: typeof import("../app/components/ResultsTableHeader.vue").default
export const ResultsTablePaginator: typeof import("../app/components/ResultsTablePaginator.vue").default
export const ResultsTablePaginatorButton: typeof import("../app/components/ResultsTablePaginatorButton.vue").default
export const ResultsTableRow: typeof import("../app/components/ResultsTableRow.vue").default
export const SearchBar: typeof import("../app/components/SearchBar.vue").default
export const SearchResult: typeof import("../app/components/SearchResult.vue").default
export const SidebarToggle: typeof import("../app/components/SidebarToggle.vue").default
export const SourceTag: typeof import("../app/components/SourceTag.vue").default
export const ThemeSwitcher: typeof import("../app/components/ThemeSwitcher.vue").default
export const ToolBar: typeof import("../app/components/ToolBar.vue").default
export const ToolBarToggle: typeof import("../app/components/ToolBarToggle.vue").default
export const ToolButton: typeof import("../app/components/ToolButton.vue").default
export const ToolButtonEncounterBuilder: typeof import("../app/components/ToolButtonEncounterBuilder.vue").default
export const ToolButtonReportIssue: typeof import("../app/components/ToolButtonReportIssue.vue").default
export const ToolButtonSourceSelector: typeof import("../app/components/ToolButtonSourceSelector.vue").default
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const Icon: typeof import("../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/Icon.vue").default
export const IconCSS: typeof import("../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/IconCSS.vue").default
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue").default>
export const LazyBreadcrumbLinks: LazyComponent<typeof import("../app/components/BreadcrumbLinks.vue").default>
export const LazyClassTable: LazyComponent<typeof import("../app/components/ClassTable.vue").default>
export const LazyCrossLink: LazyComponent<typeof import("../app/components/CrossLink.global.vue").default>
export const LazyEncounterBuilder: LazyComponent<typeof import("../app/components/EncounterBuilder.vue").default>
export const LazyEncounterBuilderMonsterSearch: LazyComponent<typeof import("../app/components/EncounterBuilderMonsterSearch.vue").default>
export const LazyEncounterBuilderPartyBuilder: LazyComponent<typeof import("../app/components/EncounterBuilderPartyBuilder.vue").default>
export const LazyEncounterBuilderSummary: LazyComponent<typeof import("../app/components/EncounterBuilderSummary.vue").default>
export const LazyInlineRoller: LazyComponent<typeof import("../app/components/InlineRoller.global.vue").default>
export const LazyLinkPreview: LazyComponent<typeof import("../app/components/LinkPreview.vue").default>
export const LazyMdViewer: LazyComponent<typeof import("../app/components/MdViewer.vue").default>
export const LazyModal: LazyComponent<typeof import("../app/components/Modal.vue").default>
export const LazyModalReportIssue: LazyComponent<typeof import("../app/components/ModalReportIssue.vue").default>
export const LazyModalSourceSelector: LazyComponent<typeof import("../app/components/ModalSourceSelector.vue").default>
export const LazyMonsterAbilities: LazyComponent<typeof import("../app/components/MonsterAbilities.vue").default>
export const LazyNavigation: LazyComponent<typeof import("../app/components/Navigation.vue").default>
export const LazyPageNotifications: LazyComponent<typeof import("../app/components/PageNotifications.vue").default>
export const LazyResultsTable: LazyComponent<typeof import("../app/components/ResultsTable.vue").default>
export const LazyResultsTableFilter: LazyComponent<typeof import("../app/components/ResultsTableFilter.vue").default>
export const LazyResultsTableHeader: LazyComponent<typeof import("../app/components/ResultsTableHeader.vue").default>
export const LazyResultsTablePaginator: LazyComponent<typeof import("../app/components/ResultsTablePaginator.vue").default>
export const LazyResultsTablePaginatorButton: LazyComponent<typeof import("../app/components/ResultsTablePaginatorButton.vue").default>
export const LazyResultsTableRow: LazyComponent<typeof import("../app/components/ResultsTableRow.vue").default>
export const LazySearchBar: LazyComponent<typeof import("../app/components/SearchBar.vue").default>
export const LazySearchResult: LazyComponent<typeof import("../app/components/SearchResult.vue").default>
export const LazySidebarToggle: LazyComponent<typeof import("../app/components/SidebarToggle.vue").default>
export const LazySourceTag: LazyComponent<typeof import("../app/components/SourceTag.vue").default>
export const LazyThemeSwitcher: LazyComponent<typeof import("../app/components/ThemeSwitcher.vue").default>
export const LazyToolBar: LazyComponent<typeof import("../app/components/ToolBar.vue").default>
export const LazyToolBarToggle: LazyComponent<typeof import("../app/components/ToolBarToggle.vue").default>
export const LazyToolButton: LazyComponent<typeof import("../app/components/ToolButton.vue").default>
export const LazyToolButtonEncounterBuilder: LazyComponent<typeof import("../app/components/ToolButtonEncounterBuilder.vue").default>
export const LazyToolButtonReportIssue: LazyComponent<typeof import("../app/components/ToolButtonReportIssue.vue").default>
export const LazyToolButtonSourceSelector: LazyComponent<typeof import("../app/components/ToolButtonSourceSelector.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyIcon: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/Icon.vue").default>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/IconCSS.vue").default>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
