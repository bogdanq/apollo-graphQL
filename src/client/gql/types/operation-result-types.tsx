import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AddPartnerSiteResponse = {
  __typename?: 'addPartnerSiteResponse'
  id: Scalars['Int']
}

export type AgentSiteInformation = {
  __typename?: 'AgentSiteInformation'
  companyName: Scalars['String']
  siteAddress: Scalars['String']
  emailSupport: Scalars['String']
}

export type AuthorizationMutation = {
  __typename?: 'AuthorizationMutation'
  signIn: SignInResult
  signInWithTwoFA: User
  signUp: Scalars['Boolean']
}

export type AuthorizationMutationSignInArgs = {
  login: Scalars['String']
  password: Scalars['String']
}

export type AuthorizationMutationSignInWithTwoFaArgs = {
  code: Scalars['String']
}

export type AuthorizationMutationSignUpArgs = {
  registrationInfo: RegistrationInfo
}

export type AuthorizationQuery = {
  __typename?: 'AuthorizationQuery'
  registrationData: RegistrationData
}

export type AuthorizationQueryRegistrationDataArgs = {
  tag?: Maybe<Scalars['String']>
}

export type AuthorizedMutation = {
  __typename?: 'AuthorizedMutation'
  signOut: Scalars['Boolean']
  partner?: Maybe<PartnerMutation>
  _keep?: Maybe<Scalars['Boolean']>
  partnerAccount: PartnerAccountMutation
}

export type AuthorizedQuery = {
  __typename?: 'AuthorizedQuery'
  user: User
  partner: PartnerQuery
  partnerAccount: PartnerAccountQuery
}

export type Campaign = {
  __typename?: 'Campaign'
  id: Scalars['String']
  name: Scalars['String']
  currency: Scalars['Int']
}

export type CampaignSelector = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

export type ComissionStructureQuery = {
  __typename?: 'ComissionStructureQuery'
  getComissionStructure: Array<ComissionStructureQueryResponse>
}

export type ComissionStructureQueryResponse = {
  __typename?: 'ComissionStructureQueryResponse'
  currency?: Maybe<Scalars['String']>
  comissionStructure?: Maybe<Scalars['String']>
  comissionGroupName?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['String']>
  description?: Maybe<DescriptionJsonEntity>
  dateFinish?: Maybe<Scalars['String']>
}

export type Country = {
  __typename?: 'Country'
  id: Scalars['Int']
  name: Scalars['String']
  code: Scalars['String']
  phoneCode: Scalars['String']
}

export type CpaDescriptionJsonEntity = {
  __typename?: 'CpaDescriptionJsonEntity'
  cpaAnmount?: Maybe<Scalars['Int']>
  dayHoldup?: Maybe<Scalars['Int']>
  dateStart?: Maybe<Scalars['String']>
  dateEnd?: Maybe<Scalars['String']>
  cpaParametres?: Maybe<Array<CpaParametr>>
  cpaLvl?: Maybe<Array<CpaLevel>>
  calculationTypeComission?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
}

export type CpaLevel = {
  __typename?: 'CpaLevel'
  levelNumber?: Maybe<Scalars['Int']>
  playersAnmount?: Maybe<Scalars['Int']>
  paymentPlayer?: Maybe<Scalars['Int']>
}

export type CpaParametr = {
  __typename?: 'CpaParametr'
  parametrNumber?: Maybe<Scalars['Int']>
  periodPlayersAnmount?: Maybe<Scalars['Int']>
  comissionType?: Maybe<Scalars['Int']>
}

export type CreatePartnerLinkFilter = {
  siteId: Scalars['Int']
  currencyId: Scalars['Int']
  campaignId: Scalars['Int']
  subId?: Maybe<Scalars['String']>
  landingPage?: Maybe<Scalars['String']>
}

export type CreatePartnerLinkResponse = {
  __typename?: 'CreatePartnerLinkResponse'
  siteId: Scalars['Int']
  link: Scalars['String']
  landingPage?: Maybe<Scalars['String']>
  subId?: Maybe<Scalars['String']>
  siteName: Scalars['String']
  currencyName: Scalars['String']
  isVisible: Scalars['Boolean']
}

export type CreatePostbackFilter = {
  guid: Scalars['String']
  subPartnerId: Scalars['Int']
  siteId: Scalars['Int']
  campaignId: Scalars['Int']
  typeRequest: Scalars['Int']
  postbackType: Scalars['Int']
  variableNameInPartnerSystem: Scalars['String']
  url: Scalars['String']
  staticParameters: Scalars['String']
  minSum?: Maybe<Scalars['String']>
  minSumBet?: Maybe<Scalars['String']>
  isClickIdPostbackParameter: Scalars['Boolean']
  clickIdPostbackParameter?: Maybe<Scalars['String']>
  isPartnerIdPostbackParameter: Scalars['Boolean']
  partnerIdPostbackParameter?: Maybe<Scalars['String']>
  isTransactionPostbackParameter: Scalars['Boolean']
  transactionPostbackParameter: Scalars['String']
  isSiteIdPostbackParameter: Scalars['Boolean']
  siteIdPostbackParameter?: Maybe<Scalars['String']>
  isOtherPostbackParameter: Scalars['Boolean']
  otherPostbackParameter?: Maybe<Scalars['String']>
  isSumdepPostbackParameter: Scalars['Boolean']
  sumdepPostbackParameter?: Maybe<Scalars['String']>
  childGuid?: Maybe<Scalars['String']>
}

export type Currency = {
  __typename?: 'Currency'
  id: Scalars['String']
  name: Scalars['String']
}

export type DescriptionJsonEntity = {
  __typename?: 'DescriptionJsonEntity'
  DRevenueShare?: Maybe<RevenueDescriptionJsonEntity>
  DCPA?: Maybe<CpaDescriptionJsonEntity>
  Refferal?: Maybe<RefDescriptionJsonEntity>
}

export type DomainInfo = {
  affiliateId: Scalars['String']
  materialGroupId: Scalars['String']
  adAgentId: Scalars['String']
  currency: Scalars['String']
}

export type EditAccountResult = {
  __typename?: 'EditAccountResult'
  I: Scalars['Int']
}

export type FullProfitReportEntity = {
  __typename?: 'FullProfitReportEntity'
  AI: Scalars['Int']
  SI: Scalars['Int']
  NS?: Maybe<Scalars['String']>
  V: Scalars['Int']
  C: Scalars['Int']
  DL: Scalars['Int']
  CTR: Scalars['Float']
  R: Scalars['Int']
  HD: Scalars['Int']
  AWD: Scalars['Int']
  NDS?: Maybe<Scalars['Float']>
  SD: Scalars['Float']
  DC: Scalars['Int']
  AP: Scalars['Int']
  APBP: Scalars['Float']
  B: Scalars['Float']
  P: Scalars['Float']
  CPA: Scalars['Float']
  CS: Scalars['Float']
  IC: Scalars['Float']
  CPFDIP?: Maybe<Scalars['Int']>
}

export type FullProfitReportTotalEntity = {
  __typename?: 'FullProfitReportTotalEntity'
  status: ReportStatus
  hash?: Maybe<Scalars['Float']>
  FR?: Maybe<Array<FullProfitReportEntity>>
  ITOGO?: Maybe<FullProfitReportEntity>
  pagesCount?: Maybe<Scalars['Int']>
}

export type FullReportFilter = {
  merchant: Scalars['Int']
  startPeriod?: Maybe<Scalars['String']>
  endPeriod?: Maybe<Scalars['String']>
  siteId?: Maybe<Scalars['Int']>
  promoId?: Maybe<Scalars['String']>
  countOnPage?: Maybe<Scalars['Int']>
  pageNumber?: Maybe<Scalars['Int']>
  sorted?: Maybe<SortedType>
}

export type GeneralInformation = {
  __typename?: 'GeneralInformation'
  partnerProgramCompanyName: Scalars['String']
  siteAddress: Scalars['String']
  email: Scalars['String']
  skype: Scalars['String']
  telegramm?: Maybe<Scalars['String']>
  verificationTags: Scalars['String']
  trackingScripts: Scalars['String']
  androidAppLinks?: Maybe<Scalars['String']>
  IOSAppLinks?: Maybe<Scalars['String']>
  copyrightPeriodStart: Scalars['String']
  showPresentation: Scalars['Boolean']
  agentSiteInformation: AgentSiteInformation
  stylesTheme: StylesTheme
  minimalPayments: Scalars['String']
  dictionary: Scalars['String']
  landingCurrencyName: Scalars['String']
  seoScriptsAndTags: SeoSctiptsAndTags
}

export type GetCurrentNewsResponse = {
  __typename?: 'GetCurrentNewsResponse'
  statusID: ReportStatus
  news?: Maybe<GetNewsListResponseNews>
}

export type GetCurrentPostback = {
  __typename?: 'GetCurrentPostback'
  postbackId: Scalars['Int']
  guid: Scalars['String']
  subPartnerId: Scalars['Int']
  postbackInternalId: Scalars['Int']
  statusId: Scalars['Int']
  siteId: Scalars['Int']
  campaign: GetCurrentPostbackCampaign
  typeRequest: Scalars['Int']
  postbackType: Scalars['Int']
  variableNameInPartnerSystem: Scalars['String']
  minSum: Scalars['String']
  minSumBet: Scalars['String']
  url: Scalars['String']
  staticParameters?: Maybe<Scalars['String']>
  LFT: Scalars['String']
  isClickIdPostbackParameter: Scalars['Boolean']
  clickIdPostbackParameter: Scalars['String']
  isPartnerIdPostbackParameter: Scalars['Boolean']
  partnerIdPostbackParameter: Scalars['String']
  isTransactionPostbackParameter: Scalars['Boolean']
  transactionPostbackParameter: Scalars['String']
  isSiteIdPostbackParameter: Scalars['Boolean']
  siteIdPostbackParameter: Scalars['String']
  isOtherPostbackParameter: Scalars['Boolean']
  otherPostbackParameter: Scalars['String']
  isSumdepPostbackParameter: Scalars['Boolean']
  sumdepPostbackParameter: Scalars['String']
  childGuid?: Maybe<Scalars['String']>
  LFP: Scalars['String']
}

export type GetCurrentPostbackCampaign = {
  __typename?: 'GetCurrentPostbackCampaign'
  id: Scalars['String']
  campaignName: Scalars['String']
  mediaId: Scalars['String']
  mediaType: Scalars['String']
  domain: Scalars['String']
}

export type GetNewsListParams = {
  culture: Scalars['String']
  typeNews: Scalars['String']
}

export type GetNewsListResponse = {
  __typename?: 'GetNewsListResponse'
  statusID: ReportStatus
  news?: Maybe<Array<GetNewsListResponseNews>>
}

export type GetNewsListResponseNews = {
  __typename?: 'GetNewsListResponseNews'
  id: Scalars['Int']
  title: Scalars['String']
  image: Scalars['String']
  PImage: Scalars['String']
  shortText: Scalars['String']
  mainText?: Maybe<Scalars['String']>
  url: Scalars['String']
  isVisible: Scalars['Boolean']
  date: Scalars['String']
  datePublick: Scalars['String']
}

export type GetNewsParams = {
  culture: Scalars['String']
  newsId: Scalars['String']
}

export type GetPartnerGraphData = {
  __typename?: 'GetPartnerGraphData'
  year: Scalars['Int']
  month: Scalars['Int']
  period: Scalars['String']
  countOfViews: Scalars['Int']
  countOfClicks: Scalars['Int']
  countOfRegistrations: Scalars['Int']
  countOfDirectLinks: Scalars['Int']
  NAD: Scalars['Int']
  comissionAnmount: Scalars['Float']
}

export type GetPartnerGraphResponse = {
  __typename?: 'GetPartnerGraphResponse'
  status: ReportStatus
  data: Array<GetPartnerGraphData>
}

export type GetPartnerLinksResponse = {
  __typename?: 'GetPartnerLinksResponse'
  linkId?: Maybe<Scalars['Int']>
  siteName?: Maybe<Scalars['String']>
  landingPage?: Maybe<Scalars['String']>
  subId?: Maybe<Scalars['String']>
  finishedLink?: Maybe<Scalars['String']>
  currencyName?: Maybe<Scalars['String']>
  isVisible?: Maybe<Scalars['Boolean']>
}

export type GetPartnerPaymentResponse = {
  __typename?: 'GetPartnerPaymentResponse'
  paymentAmount: Scalars['Float']
  yesterdayPaymentAmount: Scalars['Float']
  currentMonthPaymentAmount: Scalars['Float']
  monthPaymentAmount: Scalars['Float']
  withdrawalAmount: Scalars['Float']
}

export type GetPartnerQuickRepotResponse = {
  __typename?: 'GetPartnerQuickRepotResponse'
  status: ReportStatus
  total: Array<PartnerTotalResponse>
}

export type GetPostbackInfoResponse = {
  __typename?: 'GetPostbackInfoResponse'
  guid?: Maybe<Scalars['String']>
  subPartnerId?: Maybe<Scalars['Int']>
  innerId?: Maybe<Scalars['Int']>
  companyList: Array<TypeRsultCompany>
  method: Array<TypeResult>
  type: Array<TypeResult>
  secondaryType: Array<TypeResult>
}

export type GetPostBacksResponse = {
  __typename?: 'getPostBacksResponse'
  entryId?: Maybe<Scalars['Int']>
  innerId?: Maybe<Scalars['Int']>
  siteName?: Maybe<Scalars['String']>
  shortLinkOnPostback?: Maybe<Scalars['String']>
  event?: Maybe<Scalars['String']>
  statusName?: Maybe<Scalars['String']>
}

export type HowDidYouKnow = {
  __typename?: 'HowDidYouKnow'
  id: Scalars['Int']
  name: Scalars['String']
}

export type Language = {
  __typename?: 'Language'
  id: Scalars['Int']
  name: Scalars['String']
  code: Scalars['String']
  nativeName: Scalars['String']
}

export type MainPageReportsQuery = {
  __typename?: 'MainPageReportsQuery'
  getPartnerQuickRepot: GetPartnerQuickRepotResponse
  getPartnerPayment: GetPartnerPaymentResponse
  getPartnerGraph: GetPartnerGraphResponse
}

export type MainPageReportsQueryGetPartnerQuickRepotArgs = {
  period: Scalars['Int']
}

export type MainPageReportsQueryGetPartnerPaymentArgs = {
  currencyId: Scalars['Int']
}

export type MainPageReportsQueryGetPartnerGraphArgs = {
  currencyId: Scalars['Int']
  period: Scalars['Int']
  type: Scalars['Int']
}

export type MarketingToolSelector = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

export type MarketingToolsReport = {
  __typename?: 'MarketingToolsReport'
  status: ReportStatus
  hash?: Maybe<Scalars['Float']>
  rows?: Maybe<Array<MarketingToolsReportRow>>
  total?: Maybe<MarketingToolsReportRow>
  countonpage?: Maybe<Scalars['Int']>
}

export type MarketingToolsReportFilter = {
  startPeriod: Scalars['String']
  endPeriod: Scalars['String']
  currencyId: Scalars['Int']
  siteId?: Maybe<Scalars['Int']>
  marketingToolId?: Maybe<Scalars['String']>
  marketingTool?: Maybe<MarketingToolSelector>
  subId?: Maybe<Scalars['String']>
  countOnPage?: Maybe<Scalars['Int']>
  pageNumber?: Maybe<Scalars['Int']>
  sorted?: Maybe<SortedType>
}

export type MarketingToolsReportRow = {
  __typename?: 'MarketingToolsReportRow'
  marketingToolId: Scalars['Int']
  marketingToolName?: Maybe<Scalars['String']>
  subId?: Maybe<Scalars['String']>
  marketingToolTypeName?: Maybe<Scalars['String']>
  siteId?: Maybe<Scalars['Int']>
  siteName?: Maybe<Scalars['String']>
  countOfViews?: Maybe<Scalars['Int']>
  countOfClicks?: Maybe<Scalars['Int']>
  countOfDirectLinks?: Maybe<Scalars['Int']>
  clickThroughRate?: Maybe<Scalars['Float']>
  countOfRegistrations?: Maybe<Scalars['Int']>
  registrationsClicksRatio?: Maybe<Scalars['Float']>
  countOfAccountsWithDeposits?: Maybe<Scalars['Int']>
  countOfRegistrationsWithDeposits?: Maybe<Scalars['Int']>
  newDepositors?: Maybe<Scalars['Int']>
  registrationsWithDepositsRegistrationsRatio?: Maybe<Scalars['Float']>
  depositAmount?: Maybe<Scalars['Float']>
  bonusAmount?: Maybe<Scalars['Float']>
  companyProfit?: Maybe<Scalars['Float']>
  comissionRS?: Maybe<Scalars['Float']>
  CPA?: Maybe<Scalars['Float']>
  comissionAmount?: Maybe<Scalars['Float']>
}

export type MarketingToolsType = {
  __typename?: 'MarketingToolsType'
  id: Scalars['String']
  name: Scalars['String']
}

export type Media = {
  __typename?: 'Media'
  mediaId: Scalars['Int']
  preview: Scalars['String']
  mediaName?: Maybe<Scalars['String']>
  mediaType: MediaType
  languageId: Scalars['Int']
  languageName: Scalars['String']
  width: Scalars['Int']
  height: Scalars['Int']
  currencyId: Scalars['String']
  currencyName: Scalars['String']
  htmlCode: Scalars['String']
}

export type MediaFile = {
  __typename?: 'MediaFile'
  address: Scalars['String']
}

export type MediaFilter = {
  mediaTypeId?: Maybe<Scalars['Int']>
  currencyId?: Maybe<Scalars['String']>
  languageId?: Maybe<Scalars['Int']>
  mediaName?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type MediaType = {
  __typename?: 'MediaType'
  id: Scalars['String']
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  nope?: Maybe<Scalars['Int']>
  authorization: AuthorizationMutation
  authorized: AuthorizedMutation
  resetPassword: Scalars['Boolean']
}

export type MutationNopeArgs = {
  nope: Scalars['Int']
}

export type MutationResetPasswordArgs = {
  filter: ResetPasswordFilter
}

export type NewsQuery = {
  __typename?: 'NewsQuery'
  getNewsList: GetNewsListResponse
  getActualNews: GetNewsListResponse
  getCurrentNews: GetCurrentNewsResponse
}

export type NewsQueryGetNewsListArgs = {
  params: GetNewsListParams
}

export type NewsQueryGetActualNewsArgs = {
  params: GetNewsParams
}

export type NewsQueryGetCurrentNewsArgs = {
  params: GetNewsParams
}

export type Order = {
  __typename?: 'Order'
  currencyName: Scalars['String']
  date: Scalars['String']
  paymentAmount: Scalars['Float']
  profit: Scalars['Float']
  rest: Scalars['Float']
  status: OrderStatus
}

export type OrdersAndPayments = {
  __typename?: 'OrdersAndPayments'
  orders?: Maybe<Array<Order>>
  payments?: Maybe<Array<Payment>>
}

export type OrdersAndPaymentsFilter = {
  currencyId: Scalars['Int']
  startPeriod: Scalars['String']
  endPeriod: Scalars['String']
}

export enum OrderStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  ForNextPeriod = 'FOR_NEXT_PERIOD',
  AwaitingPayment = 'AWAITING_PAYMENT',
  Error = 'ERROR'
}

export type PartnerAccountDataCountry = {
  __typename?: 'PartnerAccountDataCountry'
  T: Scalars['String']
  V: Scalars['String']
}

export type PartnerAccountDataLanguage = {
  __typename?: 'PartnerAccountDataLanguage'
  T: Scalars['String']
  V: Scalars['String']
}

export type PartnerAccountDataPaymentType = {
  __typename?: 'PartnerAccountDataPaymentType'
  T: Scalars['String']
  V: Scalars['String']
}

export type PartnerAccountModel = {
  __typename?: 'PartnerAccountModel'
  I: Scalars['Int']
  N: Scalars['String']
  E?: Maybe<Scalars['String']>
  FS: Scalars['String']
  LN: Scalars['String']
  PH: Scalars['String']
  S: Scalars['String']
  U: Scalars['String']
  CI: Scalars['Int']
  LI: Scalars['Int']
  PT: Scalars['Int']
  P?: Maybe<Scalars['String']>
  IGA: Scalars['Boolean']
  SCD: Scalars['Boolean']
  GCD: Scalars['Boolean']
}

export type PartnerAccountMutation = {
  __typename?: 'PartnerAccountMutation'
  editAccount: EditAccountResult
  editPassword: PartnerAcoountEditPasswordResponse
  twoFA?: Maybe<TwoFaMutation>
}

export type PartnerAccountMutationEditAccountArgs = {
  firstname: Scalars['String']
  lastname: Scalars['String']
  phone: Scalars['String']
  skype: Scalars['String']
  country: Scalars['Int']
  language: Scalars['Int']
  getChangeDomainEmails: Scalars['Boolean']
}

export type PartnerAccountMutationEditPasswordArgs = {
  oldPassword: Scalars['String']
  password: Scalars['String']
  confirmPassword: Scalars['String']
}

export type PartnerAccountQuery = {
  __typename?: 'PartnerAccountQuery'
  data?: Maybe<PartnerAccountType>
  twoFA?: Maybe<TwoFaQuery>
}

export type PartnerAccountType = {
  __typename?: 'PartnerAccountType'
  A?: Maybe<PartnerAccountModel>
}

export type PartnerAcoountEditPasswordResponse = {
  __typename?: 'PartnerAcoountEditPasswordResponse'
  id: Scalars['String']
  accessToken: Scalars['String']
  accessExpiresIn: Scalars['Int']
  refreshToken: Scalars['String']
  refreshExpiresIn: Scalars['Int']
}

export type PartnerDataType = {
  __typename?: 'PartnerDataType'
  currencies: Array<Currency>
  campaigns: Array<Campaign>
  mediaTypes: Array<MediaType>
  marketingToolsTypes: Array<MarketingToolsType>
}

export type PartnerLinksMutations = {
  __typename?: 'PartnerLinksMutations'
  toogleShowPartnerLink: ToogleShowPartnerLinkResponse
  createPartnerLink: CreatePartnerLinkResponse
}

export type PartnerLinksMutationsToogleShowPartnerLinkArgs = {
  id: Scalars['Int']
  state: Scalars['Boolean']
}

export type PartnerLinksMutationsCreatePartnerLinkArgs = {
  filter: CreatePartnerLinkFilter
}

export type PartnerLinksQuery = {
  __typename?: 'PartnerLinksQuery'
  getPartnerLinks: Array<GetPartnerLinksResponse>
}

export type PartnerLinksQueryGetPartnerLinksArgs = {
  isVisible: Scalars['Boolean']
}

export type PartnerMutation = {
  __typename?: 'PartnerMutation'
  _keep?: Maybe<Scalars['Boolean']>
  addPartnerSite: AddPartnerSiteResponse
  sendMail: Scalars['Boolean']
  createFeedback: Scalars['Boolean']
  addPartnerPromoCode: PartnerPromoCodeForCreationResponse
  partnerLinksMutations: PartnerLinksMutations
  postback: PostbackMutation
}

export type PartnerMutationAddPartnerSiteArgs = {
  site: SiteInput
}

export type PartnerMutationSendMailArgs = {
  message: Scalars['String']
}

export type PartnerMutationCreateFeedbackArgs = {
  message: Scalars['String']
}

export type PartnerMutationAddPartnerPromoCodeArgs = {
  siteId: Scalars['Int']
  merchantId: Scalars['Int']
  campaignId: Scalars['Int']
  promoCode?: Maybe<Scalars['String']>
}

export type PartnerPromoCodeForCreationResponse = {
  __typename?: 'PartnerPromoCodeForCreationResponse'
  I: Scalars['Int']
  PC: Scalars['String']
}

export type PartnerQuery = {
  __typename?: 'PartnerQuery'
  data: PartnerDataType
  freshAffilateLinkDomain: Scalars['String']
  sites: Array<Site>
  ordersAndPayments: OrdersAndPayments
  mainPageReports: MainPageReportsQuery
  comissionStructure: ComissionStructureQuery
  promoCodes: Array<PromoCodesEnity>
  postback: PostbackQuery
  partnerLinks: PartnerLinksQuery
  media: Array<Media>
  getMediaFile: MediaFile
  getMediaCode: Scalars['String']
  reports: PartnerReportsQuery
}

export type PartnerQueryFreshAffilateLinkDomainArgs = {
  domainInfo: DomainInfo
}

export type PartnerQueryOrdersAndPaymentsArgs = {
  filter: OrdersAndPaymentsFilter
}

export type PartnerQueryMediaArgs = {
  filter?: Maybe<MediaFilter>
}

export type PartnerQueryGetMediaFileArgs = {
  mediaId: Scalars['Int']
}

export type PartnerQueryGetMediaCodeArgs = {
  mediaId: Scalars['Int']
  mediaType: Scalars['String']
  siteId: Scalars['Int']
}

export type PartnerReportsQuery = {
  __typename?: 'PartnerReportsQuery'
  fullReport: FullProfitReportTotalEntity
  marketingToolsReport: MarketingToolsReport
  playersReport: PlayersReport
  subpartnerReport: SubpartnerReport
  quickReport: QuickReport
}

export type PartnerReportsQueryFullReportArgs = {
  filter: FullReportFilter
  methood: Scalars['String']
}

export type PartnerReportsQueryMarketingToolsReportArgs = {
  filter: MarketingToolsReportFilter
  methood: Scalars['String']
}

export type PartnerReportsQueryPlayersReportArgs = {
  filter: PlayersReportFilter
  methood: Scalars['String']
}

export type PartnerReportsQuerySubpartnerReportArgs = {
  filter: SubpartnerReportFilter
  methood: Scalars['String']
}

export type PartnerReportsQueryQuickReportArgs = {
  filter: QuickReportFilter
}

export type PartnersProgramQuery = {
  __typename?: 'PartnersProgramQuery'
  generalInformation: GeneralInformation
  termsAndConditions: Scalars['String']
  privacyPolicy: Scalars['String']
  cookiesPolicy: Scalars['String']
  faq: Scalars['String']
  contacts: Scalars['String']
  news: NewsQuery
  campaigns: Array<Campaign>
}

export type PartnerTotalResponse = {
  __typename?: 'PartnerTotalResponse'
  currencyId: Scalars['Int']
  currencyName: Scalars['String']
  countOfViews: Scalars['Int']
  countOfClicks: Scalars['Int']
  countOfRegistrations: Scalars['Int']
  countOfDirectLinks: Scalars['Int']
  countOfNewDepositors: Scalars['Int']
  profit: Scalars['Float']
  comissionRS: Scalars['Float']
  CPA: Scalars['Float']
  summCPAandRS: Scalars['Float']
}

export type Payment = {
  __typename?: 'Payment'
  currencyName: Scalars['String']
  periodFromMondey: Scalars['String']
  totalComission: Scalars['Float']
  paid: Scalars['Float']
  bonusAmount: Scalars['Float']
  profit: Scalars['Float']
  carryover: Scalars['Float']
  paymentDate: Scalars['String']
  availableToWithdraw: Scalars['Float']
}

export type Period = {
  __typename?: 'Period'
  id: Scalars['String']
  name: Scalars['String']
}

export type PlayersReport = {
  __typename?: 'PlayersReport'
  status: ReportStatus
  hash?: Maybe<Scalars['Float']>
  rows?: Maybe<Array<PlayersReportRow>>
  total?: Maybe<PlayersReportRow>
  pagesCount?: Maybe<Scalars['Int']>
}

export type PlayersReportFilter = {
  startPeriod: Scalars['String']
  endPeriod: Scalars['String']
  currencyId: Scalars['Int']
  siteId?: Maybe<Scalars['Int']>
  playerId?: Maybe<Scalars['Int']>
  campaign?: Maybe<CampaignSelector>
  mediaId?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  withoutDepositsOnly?: Maybe<Scalars['Boolean']>
  onlyNewPlayers?: Maybe<Scalars['Boolean']>
  countOnPage?: Maybe<Scalars['Int']>
  pageNumber?: Maybe<Scalars['Int']>
  sorted?: Maybe<SortedType>
}

export type PlayersReportRow = {
  __typename?: 'PlayersReportRow'
  playerId?: Maybe<Scalars['Int']>
  siteId?: Maybe<Scalars['Int']>
  siteName?: Maybe<Scalars['String']>
  mediaId?: Maybe<Scalars['Int']>
  subId?: Maybe<Scalars['String']>
  registrationDate?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  depositAmount?: Maybe<Scalars['Float']>
  betsAmount?: Maybe<Scalars['Float']>
  bonusAmount?: Maybe<Scalars['Float']>
  companyProfit?: Maybe<Scalars['Float']>
  comissionRS?: Maybe<Scalars['Float']>
  CPA?: Maybe<Scalars['Float']>
  comissionAmount?: Maybe<Scalars['Float']>
  holdTime?: Maybe<Scalars['String']>
  blocked?: Maybe<Scalars['Boolean']>
}

export type PostbackMutation = {
  __typename?: 'PostbackMutation'
  deletePostback: Scalars['String']
  createPostback: PostbackResponse
  updatePostback: PostbackResponse
}

export type PostbackMutationDeletePostbackArgs = {
  id: Scalars['Int']
}

export type PostbackMutationCreatePostbackArgs = {
  filter: CreatePostbackFilter
}

export type PostbackMutationUpdatePostbackArgs = {
  filter: UpdatePostbackFilter
}

export type PostbackQuery = {
  __typename?: 'PostbackQuery'
  getPostBacks: Array<GetPostBacksResponse>
  getPostbackInfo: GetPostbackInfoResponse
  getCurrentPostback: GetCurrentPostback
}

export type PostbackQueryGetCurrentPostbackArgs = {
  id: Scalars['Int']
}

export type PostbackResponse = {
  __typename?: 'PostbackResponse'
  I: Scalars['Int']
  II: Scalars['Int']
}

export type PromoCodesEnity = {
  __typename?: 'PromoCodesEnity'
  I: Scalars['Int']
  AAI: Scalars['Int']
  AI: Scalars['Int']
  PI: Scalars['Int']
  PC: Scalars['String']
  SI: Scalars['Int']
  S: Scalars['String']
  MI: Scalars['Int']
  MCI: Scalars['Int']
  M: Scalars['String']
  BT: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  ping: Scalars['Boolean']
  server?: Maybe<ServerPayload>
  languages: Array<Language>
  countries: Array<Country>
  siteCategories: Array<SiteCategory>
  howDidYouKnowOptions: Array<HowDidYouKnow>
  walletOptions: Array<WalletOption>
  authorization: AuthorizationQuery
  authorized: AuthorizedQuery
  user?: Maybe<User>
  partnersProgram: PartnersProgramQuery
}

export type QuickReport = {
  __typename?: 'QuickReport'
  status: ReportStatus
  total?: Maybe<QuickReportEntity>
}

export type QuickReportEntity = {
  __typename?: 'QuickReportEntity'
  countOfViews?: Maybe<Scalars['Int']>
  countOfClicks?: Maybe<Scalars['Int']>
  countOfDirectLinks?: Maybe<Scalars['Int']>
  CTR?: Maybe<Scalars['Float']>
  countOfRegistrations?: Maybe<Scalars['Int']>
  RTC?: Maybe<Scalars['Float']>
  countOfRegistrationsWithDeposits?: Maybe<Scalars['Int']>
  DTR?: Maybe<Scalars['Float']>
  NDS?: Maybe<Scalars['Float']>
  NAD?: Maybe<Scalars['Int']>
  AWD?: Maybe<Scalars['Int']>
  SD?: Maybe<Scalars['Float']>
  profit?: Maybe<Scalars['Float']>
  countOfDeposits?: Maybe<Scalars['Int']>
  countOfActivePlayers?: Maybe<Scalars['Int']>
  averageProfitPlayers?: Maybe<Scalars['Float']>
  summOfBonus?: Maybe<Scalars['Float']>
  summOfCommissions?: Maybe<Scalars['Float']>
  CPA?: Maybe<Scalars['Float']>
  summOfReferalCommissions?: Maybe<Scalars['Float']>
  summCPAandRS?: Maybe<Scalars['Float']>
}

export type QuickReportFilter = {
  currencyId: Scalars['Int']
  startPeriod: Scalars['String']
  endPeriod: Scalars['String']
  siteId?: Maybe<Scalars['Int']>
  promoId?: Maybe<Scalars['String']>
}

export type RefDescriptionJsonEntity = {
  __typename?: 'RefDescriptionJsonEntity'
  negativeComission?: Maybe<Scalars['Boolean']>
  dateStart?: Maybe<Scalars['String']>
  dateEnd?: Maybe<Scalars['String']>
  cpaLevel?: Maybe<Array<Maybe<RefLevel>>>
  calculationTypeComission?: Maybe<Scalars['Int']>
}

export type RefLevel = {
  __typename?: 'RefLevel'
  levelNumber?: Maybe<Scalars['Int']>
  comissionPersent?: Maybe<Scalars['Int']>
}

export type RegistrationData = {
  __typename?: 'RegistrationData'
  RI?: Maybe<Scalars['Int']>
}

export type RegistrationInfo = {
  login: Scalars['String']
  password: Scalars['String']
  website: Scalars['String']
  websiteCategory: Scalars['Int']
  language: Scalars['Int']
  howDidYouKnow: Scalars['Int']
  firstname: Scalars['String']
  lastname: Scalars['String']
  email: Scalars['String']
  skype: Scalars['String']
  country: Scalars['Int']
  phone: Scalars['String']
  walletType: Scalars['Int']
  walletNumber: Scalars['String']
  rulesConfirmed: Scalars['Boolean']
  refId?: Maybe<Scalars['Int']>
}

export enum ReportStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export type ResetPasswordFilter = {
  login: Scalars['String']
  email: Scalars['String']
}

export type RevenueDescriptionJsonEntity = {
  __typename?: 'RevenueDescriptionJsonEntity'
  negativeComission?: Maybe<Scalars['Boolean']>
  comissionPersent?: Maybe<Scalars['Int']>
  adminPersent?: Maybe<Scalars['Int']>
  dateStart?: Maybe<Scalars['String']>
  dateEnd?: Maybe<Scalars['String']>
  calculationType?: Maybe<Scalars['Int']>
  cpaLvl?: Maybe<Array<Revlvl>>
  calculationTypeComission?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
}

export type Revlvl = {
  __typename?: 'Revlvl'
  lvlname?: Maybe<Scalars['Int']>
  comissionPersent?: Maybe<Scalars['Int']>
  p?: Maybe<Scalars['Int']>
}

export type SeoSctiptsAndTags = {
  __typename?: 'SEOSctiptsAndTags'
  verificationTags?: Maybe<Scalars['String']>
  trackingScripts?: Maybe<Scalars['String']>
  successfullLoginScript?: Maybe<Scalars['String']>
  unsuccessfullLoginScript?: Maybe<Scalars['String']>
  successfullRegistrationScript?: Maybe<Scalars['String']>
  unsuccessfullRegistrationScript?: Maybe<Scalars['String']>
}

export type ServerPayload = {
  __typename?: 'ServerPayload'
  time: Scalars['Float']
}

export type SignInResult = {
  __typename?: 'SignInResult'
  user?: Maybe<User>
  twoFactorAuthNeeded: Scalars['Boolean']
}

export type Site = {
  __typename?: 'Site'
  id: Scalars['Int']
  name: Scalars['String']
}

export type SiteCategory = {
  __typename?: 'SiteCategory'
  id: Scalars['Int']
  name: Scalars['String']
}

export type SiteInput = {
  name: Scalars['String']
  siteCategoryId: Scalars['Int']
  languageId: Scalars['Int']
}

export type SortedType = {
  id?: Maybe<Scalars['String']>
  desc?: Maybe<Scalars['Boolean']>
}

export type StylesTheme = {
  __typename?: 'StylesTheme'
  brandColor: Scalars['String']
}

export type SubpartnerReport = {
  __typename?: 'SubpartnerReport'
  status: ReportStatus
  hash?: Maybe<Scalars['Float']>
  rows?: Maybe<Array<SubpartnerReportRow>>
  total?: Maybe<SubpartnerReportRow>
  pagesCount?: Maybe<Scalars['Int']>
}

export type SubpartnerReportFilter = {
  startPeriod: Scalars['String']
  endPeriod: Scalars['String']
  currencyId: Scalars['Int']
  countOnPage?: Maybe<Scalars['Int']>
  pageNumber?: Maybe<Scalars['Int']>
  sorted?: Maybe<SortedType>
}

export type SubpartnerReportRow = {
  __typename?: 'SubpartnerReportRow'
  subPartnerId?: Maybe<Scalars['Int']>
  siteName?: Maybe<Scalars['String']>
  supPartnerLvl?: Maybe<Scalars['Int']>
  percentOfComissionOfLvl?: Maybe<Scalars['Int']>
  countOfViews?: Maybe<Scalars['Int']>
  countOfClicks?: Maybe<Scalars['Int']>
  countOfDirectLinks?: Maybe<Scalars['Int']>
  countOfRegistrations?: Maybe<Scalars['Int']>
  countOfNewAccountsWithDeposits?: Maybe<Scalars['Int']>
  depositAmount?: Maybe<Scalars['Float']>
  profit?: Maybe<Scalars['Float']>
  CPA?: Maybe<Scalars['Float']>
  referalComission?: Maybe<Scalars['Float']>
}

export type ToogleShowPartnerLinkResponse = {
  __typename?: 'ToogleShowPartnerLinkResponse'
  id: Scalars['Int']
  result: Scalars['String']
}

export type TwoFaMutation = {
  __typename?: 'TwoFAMutation'
  activate: Scalars['String']
  deactivate: Scalars['String']
}

export type TwoFaMutationActivateArgs = {
  code: Scalars['String']
}

export type TwoFaMutationDeactivateArgs = {
  code: Scalars['String']
}

export type TwoFaQuery = {
  __typename?: 'TwoFAQuery'
  setupData: TwoFaSetupData
}

export type TwoFaSetupData = {
  __typename?: 'TwoFASetupData'
  outpauth: Scalars['String']
}

export type TypeResult = {
  __typename?: 'TypeResult'
  value?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type TypeRsultCompany = {
  __typename?: 'TypeRsultCompany'
  id?: Maybe<Scalars['String']>
  domain?: Maybe<Scalars['String']>
  mediaId?: Maybe<Scalars['String']>
  mediaType?: Maybe<Scalars['String']>
}

export type UpdatePostbackFilter = {
  postbackId: Scalars['Int']
  statusId: Scalars['Int']
  postbackInternalId: Scalars['Int']
  guid: Scalars['String']
  subPartnerId: Scalars['Int']
  siteId: Scalars['Int']
  campaignId: Scalars['Int']
  typeRequest: Scalars['Int']
  postbackType: Scalars['Int']
  variableNameInPartnerSystem: Scalars['String']
  url: Scalars['String']
  staticParameters: Scalars['String']
  minSum?: Maybe<Scalars['String']>
  minSumBet?: Maybe<Scalars['String']>
  isClickIdPostbackParameter: Scalars['Boolean']
  clickIdPostbackParameter?: Maybe<Scalars['String']>
  isPartnerIdPostbackParameter: Scalars['Boolean']
  partnerIdPostbackParameter?: Maybe<Scalars['String']>
  isTransactionPostbackParameter: Scalars['Boolean']
  transactionPostbackParameter: Scalars['String']
  isSiteIdPostbackParameter: Scalars['Boolean']
  siteIdPostbackParameter?: Maybe<Scalars['String']>
  isOtherPostbackParameter: Scalars['Boolean']
  otherPostbackParameter?: Maybe<Scalars['String']>
  isSumdepPostbackParameter: Scalars['Boolean']
  sumdepPostbackParameter?: Maybe<Scalars['String']>
  childGuid?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  name: Scalars['String']
  csrf: Scalars['String']
  affiliateId: Scalars['String']
  materialGroupId: Scalars['String']
  adAgentId: Scalars['String']
}

export type WalletOption = {
  __typename?: 'WalletOption'
  id: Scalars['Int']
  name: Scalars['String']
}

export type GetNewsListQueryVariables = {
  params: GetNewsListParams
}

export type GetNewsListQuery = { __typename?: 'Query' } & {
  partnersProgram: { __typename?: 'PartnersProgramQuery' } & {
    news: { __typename?: 'NewsQuery' } & {
      getNewsList: { __typename?: 'GetNewsListResponse' } & Pick<
        GetNewsListResponse,
        'statusID'
      > & {
          news: Maybe<
            Array<
              { __typename?: 'GetNewsListResponseNews' } & Pick<
                GetNewsListResponseNews,
                | 'id'
                | 'title'
                | 'image'
                | 'PImage'
                | 'shortText'
                | 'mainText'
                | 'url'
                | 'isVisible'
                | 'date'
                | 'datePublick'
              >
            >
          >
        }
    }
  }
}

export const GetNewsListDocument = gql`
  query GetNewsList($params: GetNewsListParams!) {
    partnersProgram {
      news {
        getNewsList(params: $params) {
          statusID
          news {
            id
            title
            image
            PImage
            shortText
            mainText
            url
            isVisible
            date
            datePublick
          }
        }
      }
    }
  }
`
export type GetNewsListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetNewsListQuery,
    GetNewsListQueryVariables
  >,
  'query'
> &
  ({ variables: GetNewsListQueryVariables; skip?: boolean } | { skip: boolean })

export const GetNewsListComponent = (props: GetNewsListComponentProps) => (
  <ApolloReactComponents.Query<GetNewsListQuery, GetNewsListQueryVariables>
    query={GetNewsListDocument}
    {...props}
  />
)

/**
 * __useGetNewsListQuery__
 *
 * To run a query within a React component, call `useGetNewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsListQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetNewsListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetNewsListQuery,
    GetNewsListQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetNewsListQuery, GetNewsListQueryVariables>(
    GetNewsListDocument,
    baseOptions
  )
}
export function useGetNewsListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetNewsListQuery,
    GetNewsListQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetNewsListQuery,
    GetNewsListQueryVariables
  >(GetNewsListDocument, baseOptions)
}
export type GetNewsListQueryHookResult = ReturnType<typeof useGetNewsListQuery>
export type GetNewsListLazyQueryHookResult = ReturnType<
  typeof useGetNewsListLazyQuery
>
export type GetNewsListQueryResult = ApolloReactCommon.QueryResult<
  GetNewsListQuery,
  GetNewsListQueryVariables
>
