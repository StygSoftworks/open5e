
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

interface _GlobalComponents {
  'AppFooter': typeof import("../../app/components/AppFooter.vue").default
  'BreadcrumbLinks': typeof import("../../app/components/BreadcrumbLinks.vue").default
  'ClassTable': typeof import("../../app/components/ClassTable.vue").default
  'CrossLink': typeof import("../../app/components/CrossLink.global.vue").default
  'EncounterBuilder': typeof import("../../app/components/EncounterBuilder.vue").default
  'EncounterBuilderMonsterSearch': typeof import("../../app/components/EncounterBuilderMonsterSearch.vue").default
  'EncounterBuilderPartyBuilder': typeof import("../../app/components/EncounterBuilderPartyBuilder.vue").default
  'EncounterBuilderSummary': typeof import("../../app/components/EncounterBuilderSummary.vue").default
  'InlineRoller': typeof import("../../app/components/InlineRoller.global.vue").default
  'LinkPreview': typeof import("../../app/components/LinkPreview.vue").default
  'MdViewer': typeof import("../../app/components/MdViewer.vue").default
  'Modal': typeof import("../../app/components/Modal.vue").default
  'ModalReportIssue': typeof import("../../app/components/ModalReportIssue.vue").default
  'ModalSourceSelector': typeof import("../../app/components/ModalSourceSelector.vue").default
  'MonsterAbilities': typeof import("../../app/components/MonsterAbilities.vue").default
  'Navigation': typeof import("../../app/components/Navigation.vue").default
  'PageNotifications': typeof import("../../app/components/PageNotifications.vue").default
  'ResultsTable': typeof import("../../app/components/ResultsTable.vue").default
  'ResultsTableFilter': typeof import("../../app/components/ResultsTableFilter.vue").default
  'ResultsTableHeader': typeof import("../../app/components/ResultsTableHeader.vue").default
  'ResultsTablePaginator': typeof import("../../app/components/ResultsTablePaginator.vue").default
  'ResultsTablePaginatorButton': typeof import("../../app/components/ResultsTablePaginatorButton.vue").default
  'ResultsTableRow': typeof import("../../app/components/ResultsTableRow.vue").default
  'SearchBar': typeof import("../../app/components/SearchBar.vue").default
  'SearchResult': typeof import("../../app/components/SearchResult.vue").default
  'SidebarToggle': typeof import("../../app/components/SidebarToggle.vue").default
  'SourceTag': typeof import("../../app/components/SourceTag.vue").default
  'ThemeSwitcher': typeof import("../../app/components/ThemeSwitcher.vue").default
  'ToolBar': typeof import("../../app/components/ToolBar.vue").default
  'ToolBarToggle': typeof import("../../app/components/ToolBarToggle.vue").default
  'ToolButton': typeof import("../../app/components/ToolButton.vue").default
  'ToolButtonEncounterBuilder': typeof import("../../app/components/ToolButtonEncounterBuilder.vue").default
  'ToolButtonReportIssue': typeof import("../../app/components/ToolButtonReportIssue.vue").default
  'ToolButtonSourceSelector': typeof import("../../app/components/ToolButtonSourceSelector.vue").default
  'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'Icon': typeof import("../../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/Icon.vue").default
  'IconCSS': typeof import("../../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/IconCSS.vue").default
  'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyAppFooter': LazyComponent<typeof import("../../app/components/AppFooter.vue").default>
  'LazyBreadcrumbLinks': LazyComponent<typeof import("../../app/components/BreadcrumbLinks.vue").default>
  'LazyClassTable': LazyComponent<typeof import("../../app/components/ClassTable.vue").default>
  'LazyCrossLink': LazyComponent<typeof import("../../app/components/CrossLink.global.vue").default>
  'LazyEncounterBuilder': LazyComponent<typeof import("../../app/components/EncounterBuilder.vue").default>
  'LazyEncounterBuilderMonsterSearch': LazyComponent<typeof import("../../app/components/EncounterBuilderMonsterSearch.vue").default>
  'LazyEncounterBuilderPartyBuilder': LazyComponent<typeof import("../../app/components/EncounterBuilderPartyBuilder.vue").default>
  'LazyEncounterBuilderSummary': LazyComponent<typeof import("../../app/components/EncounterBuilderSummary.vue").default>
  'LazyInlineRoller': LazyComponent<typeof import("../../app/components/InlineRoller.global.vue").default>
  'LazyLinkPreview': LazyComponent<typeof import("../../app/components/LinkPreview.vue").default>
  'LazyMdViewer': LazyComponent<typeof import("../../app/components/MdViewer.vue").default>
  'LazyModal': LazyComponent<typeof import("../../app/components/Modal.vue").default>
  'LazyModalReportIssue': LazyComponent<typeof import("../../app/components/ModalReportIssue.vue").default>
  'LazyModalSourceSelector': LazyComponent<typeof import("../../app/components/ModalSourceSelector.vue").default>
  'LazyMonsterAbilities': LazyComponent<typeof import("../../app/components/MonsterAbilities.vue").default>
  'LazyNavigation': LazyComponent<typeof import("../../app/components/Navigation.vue").default>
  'LazyPageNotifications': LazyComponent<typeof import("../../app/components/PageNotifications.vue").default>
  'LazyResultsTable': LazyComponent<typeof import("../../app/components/ResultsTable.vue").default>
  'LazyResultsTableFilter': LazyComponent<typeof import("../../app/components/ResultsTableFilter.vue").default>
  'LazyResultsTableHeader': LazyComponent<typeof import("../../app/components/ResultsTableHeader.vue").default>
  'LazyResultsTablePaginator': LazyComponent<typeof import("../../app/components/ResultsTablePaginator.vue").default>
  'LazyResultsTablePaginatorButton': LazyComponent<typeof import("../../app/components/ResultsTablePaginatorButton.vue").default>
  'LazyResultsTableRow': LazyComponent<typeof import("../../app/components/ResultsTableRow.vue").default>
  'LazySearchBar': LazyComponent<typeof import("../../app/components/SearchBar.vue").default>
  'LazySearchResult': LazyComponent<typeof import("../../app/components/SearchResult.vue").default>
  'LazySidebarToggle': LazyComponent<typeof import("../../app/components/SidebarToggle.vue").default>
  'LazySourceTag': LazyComponent<typeof import("../../app/components/SourceTag.vue").default>
  'LazyThemeSwitcher': LazyComponent<typeof import("../../app/components/ThemeSwitcher.vue").default>
  'LazyToolBar': LazyComponent<typeof import("../../app/components/ToolBar.vue").default>
  'LazyToolBarToggle': LazyComponent<typeof import("../../app/components/ToolBarToggle.vue").default>
  'LazyToolButton': LazyComponent<typeof import("../../app/components/ToolButton.vue").default>
  'LazyToolButtonEncounterBuilder': LazyComponent<typeof import("../../app/components/ToolButtonEncounterBuilder.vue").default>
  'LazyToolButtonReportIssue': LazyComponent<typeof import("../../app/components/ToolButtonReportIssue.vue").default>
  'LazyToolButtonSourceSelector': LazyComponent<typeof import("../../app/components/ToolButtonSourceSelector.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyIcon': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/Icon.vue").default>
  'LazyIconCSS': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.5.26/node_modules/nuxt-icon/dist/runtime/IconCSS.vue").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.20.2_@types+node@20.19.27_@vue+compiler-sfc@3.5.26_eslint@8.57.1_sass@1.97.1_typescrip_u43ajdg75if4vtvsw76q2vx46u/node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
