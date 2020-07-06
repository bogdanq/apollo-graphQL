export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Json: any
  CountryCode: any
  FuzzyDateInt: any
}

export type ActivityLikeNotification = {
  __typename?: 'ActivityLikeNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  activity?: Maybe<ActivityUnion>
  user?: Maybe<User>
}

export type ActivityMentionNotification = {
  __typename?: 'ActivityMentionNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  activity?: Maybe<ActivityUnion>
  user?: Maybe<User>
}

export type ActivityMessageNotification = {
  __typename?: 'ActivityMessageNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  message?: Maybe<MessageActivity>
  user?: Maybe<User>
}

export type ActivityReply = {
  __typename?: 'ActivityReply'
  id: Scalars['Int']
  userId?: Maybe<Scalars['Int']>
  activityId?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['Int']
  user?: Maybe<User>
  likes?: Maybe<Array<Maybe<User>>>
}

export type ActivityReplyTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type ActivityReplyLikeNotification = {
  __typename?: 'ActivityReplyLikeNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  activity?: Maybe<ActivityUnion>
  user?: Maybe<User>
}

export type ActivityReplyNotification = {
  __typename?: 'ActivityReplyNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  activity?: Maybe<ActivityUnion>
  user?: Maybe<User>
}

export type ActivityReplySubscribedNotification = {
  __typename?: 'ActivityReplySubscribedNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  activityId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  activity?: Maybe<ActivityUnion>
  user?: Maybe<User>
}

export enum ActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum ActivityType {
  Text = 'TEXT',
  AnimeList = 'ANIME_LIST',
  MangaList = 'MANGA_LIST',
  Message = 'MESSAGE',
  MediaList = 'MEDIA_LIST'
}

export type ActivityUnion = TextActivity | ListActivity | MessageActivity

export type AiringNotification = {
  __typename?: 'AiringNotification'
  id: Scalars['Int']
  type?: Maybe<NotificationType>
  animeId: Scalars['Int']
  episode: Scalars['Int']
  contexts?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['Int']>
  media?: Maybe<Media>
}

export type AiringProgression = {
  __typename?: 'AiringProgression'
  episode?: Maybe<Scalars['Float']>
  score?: Maybe<Scalars['Float']>
  watching?: Maybe<Scalars['Int']>
}

export type AiringSchedule = {
  __typename?: 'AiringSchedule'
  id: Scalars['Int']
  airingAt: Scalars['Int']
  timeUntilAiring: Scalars['Int']
  episode: Scalars['Int']
  mediaId: Scalars['Int']
  media?: Maybe<Media>
}

export type AiringScheduleConnection = {
  __typename?: 'AiringScheduleConnection'
  edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>
  nodes?: Maybe<Array<Maybe<AiringSchedule>>>
  pageInfo?: Maybe<PageInfo>
}

export type AiringScheduleEdge = {
  __typename?: 'AiringScheduleEdge'
  node?: Maybe<AiringSchedule>
  id?: Maybe<Scalars['Int']>
}

export type AiringScheduleInput = {
  airingAt?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  timeUntilAiring?: Maybe<Scalars['Int']>
}

export enum AiringSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
}

export type AniChartHighlightInput = {
  mediaId?: Maybe<Scalars['Int']>
  highlight?: Maybe<Scalars['String']>
}

export type AniChartUser = {
  __typename?: 'AniChartUser'
  user?: Maybe<User>
  settings?: Maybe<Scalars['Json']>
  highlights?: Maybe<Scalars['Json']>
}

export type Character = {
  __typename?: 'Character'
  id: Scalars['Int']
  name?: Maybe<CharacterName>
  image?: Maybe<CharacterImage>
  description?: Maybe<Scalars['String']>
  isFavourite: Scalars['Boolean']
  siteUrl?: Maybe<Scalars['String']>
  media?: Maybe<MediaConnection>
  updatedAt?: Maybe<Scalars['Int']>
  favourites?: Maybe<Scalars['Int']>
  modNotes?: Maybe<Scalars['String']>
}

export type CharacterDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type CharacterMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>
  type?: Maybe<MediaType>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type CharacterConnection = {
  __typename?: 'CharacterConnection'
  edges?: Maybe<Array<Maybe<CharacterEdge>>>
  nodes?: Maybe<Array<Maybe<Character>>>
  pageInfo?: Maybe<PageInfo>
}

export type CharacterEdge = {
  __typename?: 'CharacterEdge'
  node?: Maybe<Character>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<CharacterRole>
  voiceActors?: Maybe<Array<Maybe<Staff>>>
  media?: Maybe<Array<Maybe<Media>>>
  favouriteOrder?: Maybe<Scalars['Int']>
}

export type CharacterEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>
  sort?: Maybe<Array<Maybe<StaffSort>>>
}

export type CharacterImage = {
  __typename?: 'CharacterImage'
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
}

export type CharacterName = {
  __typename?: 'CharacterName'
  first?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['String']>
  full?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type CharacterNameInput = {
  first?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum CharacterRole {
  Main = 'MAIN',
  Supporting = 'SUPPORTING',
  Background = 'BACKGROUND'
}

export enum CharacterSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

export type CharacterSubmission = {
  __typename?: 'CharacterSubmission'
  id: Scalars['Int']
  character?: Maybe<Character>
  submission?: Maybe<Character>
  submitter?: Maybe<User>
  status?: Maybe<SubmissionStatus>
  notes?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
}

export type CharacterSubmissionConnection = {
  __typename?: 'CharacterSubmissionConnection'
  edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>
  nodes?: Maybe<Array<Maybe<CharacterSubmission>>>
  pageInfo?: Maybe<PageInfo>
}

export type CharacterSubmissionEdge = {
  __typename?: 'CharacterSubmissionEdge'
  node?: Maybe<CharacterSubmission>
  role?: Maybe<CharacterRole>
  voiceActors?: Maybe<Array<Maybe<Staff>>>
  submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>
}

export type Deleted = {
  __typename?: 'Deleted'
  deleted?: Maybe<Scalars['Boolean']>
}

export type Favourites = {
  __typename?: 'Favourites'
  anime?: Maybe<MediaConnection>
  manga?: Maybe<MediaConnection>
  characters?: Maybe<CharacterConnection>
  staff?: Maybe<StaffConnection>
  studios?: Maybe<StudioConnection>
}

export type FavouritesAnimeArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type FavouritesMangaArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type FavouritesCharactersArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type FavouritesStaffArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type FavouritesStudiosArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type FollowingNotification = {
  __typename?: 'FollowingNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  user?: Maybe<User>
}

export type FormatStats = {
  __typename?: 'FormatStats'
  format?: Maybe<MediaFormat>
  amount?: Maybe<Scalars['Int']>
}

export type FuzzyDate = {
  __typename?: 'FuzzyDate'
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
}

export type FuzzyDateInput = {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
}

export type GenreStats = {
  __typename?: 'GenreStats'
  genre?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
  timeWatched?: Maybe<Scalars['Int']>
}

export type InternalPage = {
  __typename?: 'InternalPage'
  mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>
  characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>
  staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>
  revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>
  reports?: Maybe<Array<Maybe<Report>>>
  modActions?: Maybe<Array<Maybe<ModAction>>>
  pageInfo?: Maybe<PageInfo>
  users?: Maybe<Array<Maybe<User>>>
  media?: Maybe<Array<Maybe<Media>>>
  characters?: Maybe<Array<Maybe<Character>>>
  staff?: Maybe<Array<Maybe<Staff>>>
  studios?: Maybe<Array<Maybe<Studio>>>
  mediaList?: Maybe<Array<Maybe<MediaList>>>
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>
  followers?: Maybe<Array<Maybe<User>>>
  following?: Maybe<Array<Maybe<User>>>
  activities?: Maybe<Array<Maybe<ActivityUnion>>>
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>
  threads?: Maybe<Array<Maybe<Thread>>>
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>
  reviews?: Maybe<Array<Maybe<Review>>>
  recommendations?: Maybe<Array<Maybe<Recommendation>>>
  likes?: Maybe<Array<Maybe<User>>>
}

export type InternalPageMediaSubmissionsArgs = {
  mediaId?: Maybe<Scalars['Int']>
  submissionId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  status?: Maybe<SubmissionStatus>
  type?: Maybe<MediaType>
  sort?: Maybe<Array<Maybe<SubmissionSort>>>
}

export type InternalPageCharacterSubmissionsArgs = {
  characterId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  status?: Maybe<SubmissionStatus>
  sort?: Maybe<Array<Maybe<SubmissionSort>>>
}

export type InternalPageStaffSubmissionsArgs = {
  staffId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  status?: Maybe<SubmissionStatus>
  sort?: Maybe<Array<Maybe<SubmissionSort>>>
}

export type InternalPageRevisionHistoryArgs = {
  userId?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  characterId?: Maybe<Scalars['Int']>
  staffId?: Maybe<Scalars['Int']>
  studioId?: Maybe<Scalars['Int']>
}

export type InternalPageModActionsArgs = {
  userId?: Maybe<Scalars['Int']>
}

export type InternalPageUsersArgs = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type InternalPageMediaArgs = {
  id?: Maybe<Scalars['Int']>
  idMal?: Maybe<Scalars['Int']>
  startDate?: Maybe<Scalars['FuzzyDateInt']>
  endDate?: Maybe<Scalars['FuzzyDateInt']>
  season?: Maybe<MediaSeason>
  seasonYear?: Maybe<Scalars['Int']>
  type?: Maybe<MediaType>
  format?: Maybe<MediaFormat>
  status?: Maybe<MediaStatus>
  episodes?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  chapters?: Maybe<Scalars['Int']>
  volumes?: Maybe<Scalars['Int']>
  isAdult?: Maybe<Scalars['Boolean']>
  genre?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  minimumTagRank?: Maybe<Scalars['Int']>
  tagCategory?: Maybe<Scalars['String']>
  onList?: Maybe<Scalars['Boolean']>
  licensedBy?: Maybe<Scalars['String']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  source?: Maybe<MediaSource>
  countryOfOrigin?: Maybe<Scalars['CountryCode']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not?: Maybe<Scalars['Int']>
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startDate_like?: Maybe<Scalars['String']>
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  endDate_like?: Maybe<Scalars['String']>
  format_in?: Maybe<Array<Maybe<MediaFormat>>>
  format_not?: Maybe<MediaFormat>
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
  status_in?: Maybe<Array<Maybe<MediaStatus>>>
  status_not?: Maybe<MediaStatus>
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater?: Maybe<Scalars['Int']>
  episodes_lesser?: Maybe<Scalars['Int']>
  duration_greater?: Maybe<Scalars['Int']>
  duration_lesser?: Maybe<Scalars['Int']>
  chapters_greater?: Maybe<Scalars['Int']>
  chapters_lesser?: Maybe<Scalars['Int']>
  volumes_greater?: Maybe<Scalars['Int']>
  volumes_lesser?: Maybe<Scalars['Int']>
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>
  averageScore_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  source_in?: Maybe<Array<Maybe<MediaSource>>>
  sort?: Maybe<Array<Maybe<MediaSort>>>
}

export type InternalPageCharactersArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<CharacterSort>>>
}

export type InternalPageStaffArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StaffSort>>>
}

export type InternalPageStudiosArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StudioSort>>>
}

export type InternalPageMediaListArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  type?: Maybe<MediaType>
  status?: Maybe<MediaListStatus>
  mediaId?: Maybe<Scalars['Int']>
  isFollowing?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  startedAt?: Maybe<Scalars['FuzzyDateInt']>
  completedAt?: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList?: Maybe<Scalars['Boolean']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not?: Maybe<MediaListStatus>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like?: Maybe<Scalars['String']>
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like?: Maybe<Scalars['String']>
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<MediaListSort>>>
}

export type InternalPageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  airingAt?: Maybe<Scalars['Int']>
  notYetAired?: Maybe<Scalars['Boolean']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not?: Maybe<Scalars['Int']>
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  airingAt_greater?: Maybe<Scalars['Int']>
  airingAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<AiringSort>>>
}

export type InternalPageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>
  date?: Maybe<Scalars['Int']>
  trending?: Maybe<Scalars['Int']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  releasing?: Maybe<Scalars['Boolean']>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater?: Maybe<Scalars['Int']>
  date_lesser?: Maybe<Scalars['Int']>
  trending_greater?: Maybe<Scalars['Int']>
  trending_lesser?: Maybe<Scalars['Int']>
  trending_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  averageScore_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  episode_not?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>
}

export type InternalPageNotificationsArgs = {
  type?: Maybe<NotificationType>
  resetNotificationCount?: Maybe<Scalars['Boolean']>
  type_in?: Maybe<Array<Maybe<NotificationType>>>
}

export type InternalPageFollowersArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type InternalPageFollowingArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type InternalPageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  messengerId?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  isFollowing?: Maybe<Scalars['Boolean']>
  hasReplies?: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Int']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not?: Maybe<Scalars['Int']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not?: Maybe<Scalars['Int']>
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not?: Maybe<ActivityType>
  type_in?: Maybe<Array<Maybe<ActivityType>>>
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater?: Maybe<Scalars['Int']>
  createdAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ActivitySort>>>
}

export type InternalPageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>
  activityId?: Maybe<Scalars['Int']>
}

export type InternalPageThreadsArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  replyUserId?: Maybe<Scalars['Int']>
  subscribed?: Maybe<Scalars['Boolean']>
  categoryId?: Maybe<Scalars['Int']>
  mediaCategoryId?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<ThreadSort>>>
}

export type InternalPageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>
  threadId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
}

export type InternalPageReviewsArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  mediaType?: Maybe<MediaType>
  sort?: Maybe<Array<Maybe<ReviewSort>>>
}

export type InternalPageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  mediaRecommendationId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  rating?: Maybe<Scalars['Int']>
  onList?: Maybe<Scalars['Boolean']>
  rating_greater?: Maybe<Scalars['Int']>
  rating_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<RecommendationSort>>>
}

export type InternalPageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>
  type?: Maybe<LikeableType>
}

export enum LikeableType {
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT',
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY'
}

export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment

export type ListActivity = {
  __typename?: 'ListActivity'
  id: Scalars['Int']
  userId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  replyCount: Scalars['Int']
  status?: Maybe<Scalars['String']>
  progress?: Maybe<Scalars['String']>
  isLocked?: Maybe<Scalars['Boolean']>
  isSubscribed?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
  user?: Maybe<User>
  media?: Maybe<Media>
  replies?: Maybe<Array<Maybe<ActivityReply>>>
  likes?: Maybe<Array<Maybe<User>>>
}

export type ListScoreStats = {
  __typename?: 'ListScoreStats'
  meanScore?: Maybe<Scalars['Int']>
  standardDeviation?: Maybe<Scalars['Int']>
}

export type Media = {
  __typename?: 'Media'
  id: Scalars['Int']
  idMal?: Maybe<Scalars['Int']>
  title?: Maybe<MediaTitle>
  type?: Maybe<MediaType>
  format?: Maybe<MediaFormat>
  status?: Maybe<MediaStatus>
  description?: Maybe<Scalars['String']>
  startDate?: Maybe<FuzzyDate>
  endDate?: Maybe<FuzzyDate>
  season?: Maybe<MediaSeason>
  seasonYear?: Maybe<Scalars['Int']>
  seasonInt?: Maybe<Scalars['Int']>
  episodes?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  chapters?: Maybe<Scalars['Int']>
  volumes?: Maybe<Scalars['Int']>
  countryOfOrigin?: Maybe<Scalars['CountryCode']>
  isLicensed?: Maybe<Scalars['Boolean']>
  source?: Maybe<MediaSource>
  hashtag?: Maybe<Scalars['String']>
  trailer?: Maybe<MediaTrailer>
  updatedAt?: Maybe<Scalars['Int']>
  coverImage?: Maybe<MediaCoverImage>
  bannerImage?: Maybe<Scalars['String']>
  genres?: Maybe<Array<Maybe<Scalars['String']>>>
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>
  averageScore?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  isLocked?: Maybe<Scalars['Boolean']>
  trending?: Maybe<Scalars['Int']>
  favourites?: Maybe<Scalars['Int']>
  tags?: Maybe<Array<Maybe<MediaTag>>>
  relations?: Maybe<MediaConnection>
  characters?: Maybe<CharacterConnection>
  staff?: Maybe<StaffConnection>
  studios?: Maybe<StudioConnection>
  isFavourite: Scalars['Boolean']
  isAdult?: Maybe<Scalars['Boolean']>
  nextAiringEpisode?: Maybe<AiringSchedule>
  airingSchedule?: Maybe<AiringScheduleConnection>
  trends?: Maybe<MediaTrendConnection>
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>
  streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>
  rankings?: Maybe<Array<Maybe<MediaRank>>>
  mediaListEntry?: Maybe<MediaList>
  reviews?: Maybe<ReviewConnection>
  recommendations?: Maybe<RecommendationConnection>
  stats?: Maybe<MediaStats>
  siteUrl?: Maybe<Scalars['String']>
  autoCreateForumThread?: Maybe<Scalars['Boolean']>
  isRecommendationBlocked?: Maybe<Scalars['Boolean']>
  modNotes?: Maybe<Scalars['String']>
}

export type MediaDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type MediaSourceArgs = {
  version?: Maybe<Scalars['Int']>
}

export type MediaCharactersArgs = {
  sort?: Maybe<Array<Maybe<CharacterSort>>>
  role?: Maybe<CharacterRole>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaStaffArgs = {
  sort?: Maybe<Array<Maybe<StaffSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaStudiosArgs = {
  sort?: Maybe<Array<Maybe<StudioSort>>>
  isMain?: Maybe<Scalars['Boolean']>
}

export type MediaAiringScheduleArgs = {
  notYetAired?: Maybe<Scalars['Boolean']>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaTrendsArgs = {
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>
  releasing?: Maybe<Scalars['Boolean']>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaReviewsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ReviewSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaRecommendationsArgs = {
  sort?: Maybe<Array<Maybe<RecommendationSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type MediaCharacter = {
  __typename?: 'MediaCharacter'
  id?: Maybe<Scalars['Int']>
  role?: Maybe<CharacterRole>
  character?: Maybe<Character>
  voiceActor?: Maybe<Staff>
}

export type MediaConnection = {
  __typename?: 'MediaConnection'
  edges?: Maybe<Array<Maybe<MediaEdge>>>
  nodes?: Maybe<Array<Maybe<Media>>>
  pageInfo?: Maybe<PageInfo>
}

export type MediaCoverImage = {
  __typename?: 'MediaCoverImage'
  extraLarge?: Maybe<Scalars['String']>
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
}

export type MediaEdge = {
  __typename?: 'MediaEdge'
  node?: Maybe<Media>
  id?: Maybe<Scalars['Int']>
  relationType?: Maybe<MediaRelation>
  isMainStudio: Scalars['Boolean']
  characters?: Maybe<Array<Maybe<Character>>>
  characterRole?: Maybe<CharacterRole>
  staffRole?: Maybe<Scalars['String']>
  voiceActors?: Maybe<Array<Maybe<Staff>>>
  favouriteOrder?: Maybe<Scalars['Int']>
}

export type MediaEdgeRelationTypeArgs = {
  version?: Maybe<Scalars['Int']>
}

export type MediaEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>
  sort?: Maybe<Array<Maybe<StaffSort>>>
}

export type MediaExternalLink = {
  __typename?: 'MediaExternalLink'
  id: Scalars['Int']
  url: Scalars['String']
  site: Scalars['String']
}

export type MediaExternalLinkInput = {
  id: Scalars['Int']
  url: Scalars['String']
  site: Scalars['String']
}

export enum MediaFormat {
  Tv = 'TV',
  TvShort = 'TV_SHORT',
  Movie = 'MOVIE',
  Special = 'SPECIAL',
  Ova = 'OVA',
  Ona = 'ONA',
  Music = 'MUSIC',
  Manga = 'MANGA',
  Novel = 'NOVEL',
  OneShot = 'ONE_SHOT'
}

export type MediaList = {
  __typename?: 'MediaList'
  id: Scalars['Int']
  userId: Scalars['Int']
  mediaId: Scalars['Int']
  status?: Maybe<MediaListStatus>
  score?: Maybe<Scalars['Float']>
  progress?: Maybe<Scalars['Int']>
  progressVolumes?: Maybe<Scalars['Int']>
  repeat?: Maybe<Scalars['Int']>
  priority?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>
  customLists?: Maybe<Scalars['Json']>
  advancedScores?: Maybe<Scalars['Json']>
  startedAt?: Maybe<FuzzyDate>
  completedAt?: Maybe<FuzzyDate>
  updatedAt?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Int']>
  media?: Maybe<Media>
  user?: Maybe<User>
}

export type MediaListScoreArgs = {
  format?: Maybe<ScoreFormat>
}

export type MediaListCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>
}

export type MediaListCollection = {
  __typename?: 'MediaListCollection'
  lists?: Maybe<Array<Maybe<MediaListGroup>>>
  user?: Maybe<User>
  hasNextChunk?: Maybe<Scalars['Boolean']>
  statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>
  customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>
}

export type MediaListCollectionStatusListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>
}

export type MediaListCollectionCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>
}

export type MediaListGroup = {
  __typename?: 'MediaListGroup'
  entries?: Maybe<Array<Maybe<MediaList>>>
  name?: Maybe<Scalars['String']>
  isCustomList?: Maybe<Scalars['Boolean']>
  isSplitCompletedList?: Maybe<Scalars['Boolean']>
  status?: Maybe<MediaListStatus>
}

export type MediaListOptions = {
  __typename?: 'MediaListOptions'
  scoreFormat?: Maybe<ScoreFormat>
  rowOrder?: Maybe<Scalars['String']>
  useLegacyLists?: Maybe<Scalars['Boolean']>
  animeList?: Maybe<MediaListTypeOptions>
  mangaList?: Maybe<MediaListTypeOptions>
  sharedTheme?: Maybe<Scalars['Json']>
  sharedThemeEnabled?: Maybe<Scalars['Boolean']>
}

export type MediaListOptionsInput = {
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']>>>
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScoringEnabled?: Maybe<Scalars['Boolean']>
  theme?: Maybe<Scalars['String']>
}

export enum MediaListSort {
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC'
}

export enum MediaListStatus {
  Current = 'CURRENT',
  Planning = 'PLANNING',
  Completed = 'COMPLETED',
  Dropped = 'DROPPED',
  Paused = 'PAUSED',
  Repeating = 'REPEATING'
}

export type MediaListTypeOptions = {
  __typename?: 'MediaListTypeOptions'
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']>>>
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>
  theme?: Maybe<Scalars['Json']>
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScoringEnabled?: Maybe<Scalars['Boolean']>
}

export type MediaRank = {
  __typename?: 'MediaRank'
  id: Scalars['Int']
  rank: Scalars['Int']
  type: MediaRankType
  format: MediaFormat
  year?: Maybe<Scalars['Int']>
  season?: Maybe<MediaSeason>
  allTime?: Maybe<Scalars['Boolean']>
  context: Scalars['String']
}

export enum MediaRankType {
  Rated = 'RATED',
  Popular = 'POPULAR'
}

export enum MediaRelation {
  Adaptation = 'ADAPTATION',
  Prequel = 'PREQUEL',
  Sequel = 'SEQUEL',
  Parent = 'PARENT',
  SideStory = 'SIDE_STORY',
  Character = 'CHARACTER',
  Summary = 'SUMMARY',
  Alternative = 'ALTERNATIVE',
  SpinOff = 'SPIN_OFF',
  Other = 'OTHER',
  Source = 'SOURCE',
  Compilation = 'COMPILATION',
  Contains = 'CONTAINS'
}

export enum MediaSeason {
  Winter = 'WINTER',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Fall = 'FALL'
}

export enum MediaSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

export enum MediaSource {
  Original = 'ORIGINAL',
  Manga = 'MANGA',
  LightNovel = 'LIGHT_NOVEL',
  VisualNovel = 'VISUAL_NOVEL',
  VideoGame = 'VIDEO_GAME',
  Other = 'OTHER',
  Novel = 'NOVEL',
  Doujinshi = 'DOUJINSHI',
  Anime = 'ANIME'
}

export type MediaStats = {
  __typename?: 'MediaStats'
  scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
  statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
  airingProgression?: Maybe<Array<Maybe<AiringProgression>>>
}

export enum MediaStatus {
  Finished = 'FINISHED',
  Releasing = 'RELEASING',
  NotYetReleased = 'NOT_YET_RELEASED',
  Cancelled = 'CANCELLED'
}

export type MediaStreamingEpisode = {
  __typename?: 'MediaStreamingEpisode'
  title?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  site?: Maybe<Scalars['String']>
}

export type MediaSubmission = {
  __typename?: 'MediaSubmission'
  id: Scalars['Int']
  submitter?: Maybe<User>
  status?: Maybe<SubmissionStatus>
  submitterStats?: Maybe<Scalars['Json']>
  notes?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  changes?: Maybe<Array<Maybe<Scalars['String']>>>
  media?: Maybe<Media>
  submission?: Maybe<Media>
  characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  relations?: Maybe<Array<Maybe<MediaEdge>>>
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>
  createdAt?: Maybe<Scalars['Int']>
}

export type MediaSubmissionComparison = {
  __typename?: 'MediaSubmissionComparison'
  submission?: Maybe<MediaSubmissionEdge>
  character?: Maybe<MediaCharacter>
  staff?: Maybe<StaffEdge>
  studio?: Maybe<StudioEdge>
}

export type MediaSubmissionEdge = {
  __typename?: 'MediaSubmissionEdge'
  id?: Maybe<Scalars['Int']>
  characterRole?: Maybe<CharacterRole>
  staffRole?: Maybe<Scalars['String']>
  isMain?: Maybe<Scalars['Boolean']>
  character?: Maybe<Character>
  characterSubmission?: Maybe<Character>
  voiceActor?: Maybe<Staff>
  voiceActorSubmission?: Maybe<Staff>
  staff?: Maybe<Staff>
  staffSubmission?: Maybe<Staff>
  studio?: Maybe<Studio>
  media?: Maybe<Media>
}

export type MediaTag = {
  __typename?: 'MediaTag'
  id: Scalars['Int']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  rank?: Maybe<Scalars['Int']>
  isGeneralSpoiler?: Maybe<Scalars['Boolean']>
  isMediaSpoiler?: Maybe<Scalars['Boolean']>
  isAdult?: Maybe<Scalars['Boolean']>
}

export type MediaTitle = {
  __typename?: 'MediaTitle'
  romaji?: Maybe<Scalars['String']>
  english?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  userPreferred?: Maybe<Scalars['String']>
}

export type MediaTitleRomajiArgs = {
  stylised?: Maybe<Scalars['Boolean']>
}

export type MediaTitleEnglishArgs = {
  stylised?: Maybe<Scalars['Boolean']>
}

export type MediaTitleNativeArgs = {
  stylised?: Maybe<Scalars['Boolean']>
}

export type MediaTitleInput = {
  romaji?: Maybe<Scalars['String']>
  english?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
}

export type MediaTrailer = {
  __typename?: 'MediaTrailer'
  id?: Maybe<Scalars['String']>
  site?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
}

export type MediaTrend = {
  __typename?: 'MediaTrend'
  mediaId: Scalars['Int']
  date: Scalars['Int']
  trending: Scalars['Int']
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  inProgress?: Maybe<Scalars['Int']>
  releasing: Scalars['Boolean']
  episode?: Maybe<Scalars['Int']>
  media?: Maybe<Media>
}

export type MediaTrendConnection = {
  __typename?: 'MediaTrendConnection'
  edges?: Maybe<Array<Maybe<MediaTrendEdge>>>
  nodes?: Maybe<Array<Maybe<MediaTrend>>>
  pageInfo?: Maybe<PageInfo>
}

export type MediaTrendEdge = {
  __typename?: 'MediaTrendEdge'
  node?: Maybe<MediaTrend>
}

export enum MediaTrendSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
}

export enum MediaType {
  Anime = 'ANIME',
  Manga = 'MANGA'
}

export type MessageActivity = {
  __typename?: 'MessageActivity'
  id: Scalars['Int']
  recipientId?: Maybe<Scalars['Int']>
  messengerId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  replyCount: Scalars['Int']
  message?: Maybe<Scalars['String']>
  isLocked?: Maybe<Scalars['Boolean']>
  isSubscribed?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  isPrivate?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
  recipient?: Maybe<User>
  messenger?: Maybe<User>
  replies?: Maybe<Array<Maybe<ActivityReply>>>
  likes?: Maybe<Array<Maybe<User>>>
}

export type MessageActivityMessageArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type ModAction = {
  __typename?: 'ModAction'
  id: Scalars['Int']
  user?: Maybe<User>
  mod?: Maybe<User>
  type?: Maybe<ModActionType>
  objectId?: Maybe<Scalars['Int']>
  objectType?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
}

export enum ModActionType {
  Note = 'NOTE',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Report = 'REPORT',
  Reset = 'RESET',
  Anon = 'ANON'
}

export type Mutation = {
  __typename?: 'Mutation'
  UpdateUser?: Maybe<User>
  SaveMediaListEntry?: Maybe<MediaList>
  UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>
  DeleteMediaListEntry?: Maybe<Deleted>
  DeleteCustomList?: Maybe<Deleted>
  SaveTextActivity?: Maybe<TextActivity>
  SaveMessageActivity?: Maybe<MessageActivity>
  SaveListActivity?: Maybe<ListActivity>
  DeleteActivity?: Maybe<Deleted>
  ToggleActivitySubscription?: Maybe<ActivityUnion>
  SaveActivityReply?: Maybe<ActivityReply>
  DeleteActivityReply?: Maybe<Deleted>
  ToggleLike?: Maybe<Array<Maybe<User>>>
  ToggleLikeV2?: Maybe<LikeableUnion>
  ToggleFollow?: Maybe<User>
  ToggleFavourite?: Maybe<Favourites>
  UpdateFavouriteOrder?: Maybe<Favourites>
  SaveReview?: Maybe<Review>
  DeleteReview?: Maybe<Deleted>
  RateReview?: Maybe<Review>
  SaveRecommendation?: Maybe<Recommendation>
  SaveThread?: Maybe<Thread>
  DeleteThread?: Maybe<Deleted>
  ToggleThreadSubscription?: Maybe<Thread>
  SaveThreadComment?: Maybe<ThreadComment>
  DeleteThreadComment?: Maybe<Deleted>
  UpdateAniChartSettings?: Maybe<Scalars['Json']>
  UpdateAniChartHighlights?: Maybe<Scalars['Json']>
}

export type MutationUpdateUserArgs = {
  about?: Maybe<Scalars['String']>
  titleLanguage?: Maybe<UserTitleLanguage>
  displayAdultContent?: Maybe<Scalars['Boolean']>
  airingNotifications?: Maybe<Scalars['Boolean']>
  scoreFormat?: Maybe<ScoreFormat>
  rowOrder?: Maybe<Scalars['String']>
  profileColor?: Maybe<Scalars['String']>
  donatorBadge?: Maybe<Scalars['String']>
  notificationOptions?: Maybe<Array<Maybe<NotificationOptionInput>>>
  animeListOptions?: Maybe<MediaListOptionsInput>
  mangaListOptions?: Maybe<MediaListOptionsInput>
}

export type MutationSaveMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  status?: Maybe<MediaListStatus>
  score?: Maybe<Scalars['Float']>
  scoreRaw?: Maybe<Scalars['Int']>
  progress?: Maybe<Scalars['Int']>
  progressVolumes?: Maybe<Scalars['Int']>
  repeat?: Maybe<Scalars['Int']>
  priority?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScores?: Maybe<Array<Maybe<Scalars['Float']>>>
  startedAt?: Maybe<FuzzyDateInput>
  completedAt?: Maybe<FuzzyDateInput>
}

export type MutationUpdateMediaListEntriesArgs = {
  status?: Maybe<MediaListStatus>
  score?: Maybe<Scalars['Float']>
  scoreRaw?: Maybe<Scalars['Int']>
  progress?: Maybe<Scalars['Int']>
  progressVolumes?: Maybe<Scalars['Int']>
  repeat?: Maybe<Scalars['Int']>
  priority?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>
  advancedScores?: Maybe<Array<Maybe<Scalars['Float']>>>
  startedAt?: Maybe<FuzzyDateInput>
  completedAt?: Maybe<FuzzyDateInput>
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationDeleteMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationDeleteCustomListArgs = {
  customList?: Maybe<Scalars['String']>
  type?: Maybe<MediaType>
}

export type MutationSaveTextActivityArgs = {
  id?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  locked?: Maybe<Scalars['Boolean']>
}

export type MutationSaveMessageActivityArgs = {
  id?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
  recipientId?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
  asMod?: Maybe<Scalars['Boolean']>
}

export type MutationSaveListActivityArgs = {
  id?: Maybe<Scalars['Int']>
  locked?: Maybe<Scalars['Boolean']>
}

export type MutationDeleteActivityArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationToggleActivitySubscriptionArgs = {
  activityId?: Maybe<Scalars['Int']>
  subscribe?: Maybe<Scalars['Boolean']>
}

export type MutationSaveActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>
  activityId?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  asMod?: Maybe<Scalars['Boolean']>
}

export type MutationDeleteActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationToggleLikeArgs = {
  id?: Maybe<Scalars['Int']>
  type?: Maybe<LikeableType>
}

export type MutationToggleLikeV2Args = {
  id?: Maybe<Scalars['Int']>
  type?: Maybe<LikeableType>
}

export type MutationToggleFollowArgs = {
  userId?: Maybe<Scalars['Int']>
}

export type MutationToggleFavouriteArgs = {
  animeId?: Maybe<Scalars['Int']>
  mangaId?: Maybe<Scalars['Int']>
  characterId?: Maybe<Scalars['Int']>
  staffId?: Maybe<Scalars['Int']>
  studioId?: Maybe<Scalars['Int']>
}

export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  mangaIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  characterIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  staffIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  studioIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  animeOrder?: Maybe<Array<Maybe<Scalars['Int']>>>
  mangaOrder?: Maybe<Array<Maybe<Scalars['Int']>>>
  characterOrder?: Maybe<Array<Maybe<Scalars['Int']>>>
  staffOrder?: Maybe<Array<Maybe<Scalars['Int']>>>
  studioOrder?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationSaveReviewArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  body?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  score?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
}

export type MutationDeleteReviewArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationRateReviewArgs = {
  reviewId?: Maybe<Scalars['Int']>
  rating?: Maybe<ReviewRating>
}

export type MutationSaveRecommendationArgs = {
  mediaId?: Maybe<Scalars['Int']>
  mediaRecommendationId?: Maybe<Scalars['Int']>
  rating?: Maybe<RecommendationRating>
}

export type MutationSaveThreadArgs = {
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaCategories?: Maybe<Array<Maybe<Scalars['Int']>>>
  sticky?: Maybe<Scalars['Boolean']>
  locked?: Maybe<Scalars['Boolean']>
}

export type MutationDeleteThreadArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationToggleThreadSubscriptionArgs = {
  threadId?: Maybe<Scalars['Int']>
  subscribe?: Maybe<Scalars['Boolean']>
}

export type MutationSaveThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>
  threadId?: Maybe<Scalars['Int']>
  parentCommentId?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
}

export type MutationDeleteThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>
}

export type MutationUpdateAniChartSettingsArgs = {
  titleLanguage?: Maybe<Scalars['String']>
  outgoingLinkProvider?: Maybe<Scalars['String']>
  theme?: Maybe<Scalars['String']>
  sort?: Maybe<Scalars['String']>
}

export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: Maybe<Array<Maybe<AniChartHighlightInput>>>
}

export type NotificationOption = {
  __typename?: 'NotificationOption'
  type?: Maybe<NotificationType>
  enabled?: Maybe<Scalars['Boolean']>
}

export type NotificationOptionInput = {
  type?: Maybe<NotificationType>
  enabled?: Maybe<Scalars['Boolean']>
}

export enum NotificationType {
  ActivityMessage = 'ACTIVITY_MESSAGE',
  ActivityReply = 'ACTIVITY_REPLY',
  Following = 'FOLLOWING',
  ActivityMention = 'ACTIVITY_MENTION',
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  ThreadSubscribed = 'THREAD_SUBSCRIBED',
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  Airing = 'AIRING',
  ActivityLike = 'ACTIVITY_LIKE',
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  ThreadLike = 'THREAD_LIKE',
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION'
}

export type NotificationUnion =
  | AiringNotification
  | FollowingNotification
  | ActivityMessageNotification
  | ActivityMentionNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | ActivityLikeNotification
  | ActivityReplyLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadCommentLikeNotification
  | ThreadLikeNotification
  | RelatedMediaAdditionNotification

export type Page = {
  __typename?: 'Page'
  pageInfo?: Maybe<PageInfo>
  users?: Maybe<Array<Maybe<User>>>
  media?: Maybe<Array<Maybe<Media>>>
  characters?: Maybe<Array<Maybe<Character>>>
  staff?: Maybe<Array<Maybe<Staff>>>
  studios?: Maybe<Array<Maybe<Studio>>>
  mediaList?: Maybe<Array<Maybe<MediaList>>>
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>
  followers?: Maybe<Array<Maybe<User>>>
  following?: Maybe<Array<Maybe<User>>>
  activities?: Maybe<Array<Maybe<ActivityUnion>>>
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>
  threads?: Maybe<Array<Maybe<Thread>>>
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>
  reviews?: Maybe<Array<Maybe<Review>>>
  recommendations?: Maybe<Array<Maybe<Recommendation>>>
  likes?: Maybe<Array<Maybe<User>>>
}

export type PageUsersArgs = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type PageMediaArgs = {
  id?: Maybe<Scalars['Int']>
  idMal?: Maybe<Scalars['Int']>
  startDate?: Maybe<Scalars['FuzzyDateInt']>
  endDate?: Maybe<Scalars['FuzzyDateInt']>
  season?: Maybe<MediaSeason>
  seasonYear?: Maybe<Scalars['Int']>
  type?: Maybe<MediaType>
  format?: Maybe<MediaFormat>
  status?: Maybe<MediaStatus>
  episodes?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  chapters?: Maybe<Scalars['Int']>
  volumes?: Maybe<Scalars['Int']>
  isAdult?: Maybe<Scalars['Boolean']>
  genre?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  minimumTagRank?: Maybe<Scalars['Int']>
  tagCategory?: Maybe<Scalars['String']>
  onList?: Maybe<Scalars['Boolean']>
  licensedBy?: Maybe<Scalars['String']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  source?: Maybe<MediaSource>
  countryOfOrigin?: Maybe<Scalars['CountryCode']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not?: Maybe<Scalars['Int']>
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startDate_like?: Maybe<Scalars['String']>
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  endDate_like?: Maybe<Scalars['String']>
  format_in?: Maybe<Array<Maybe<MediaFormat>>>
  format_not?: Maybe<MediaFormat>
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
  status_in?: Maybe<Array<Maybe<MediaStatus>>>
  status_not?: Maybe<MediaStatus>
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater?: Maybe<Scalars['Int']>
  episodes_lesser?: Maybe<Scalars['Int']>
  duration_greater?: Maybe<Scalars['Int']>
  duration_lesser?: Maybe<Scalars['Int']>
  chapters_greater?: Maybe<Scalars['Int']>
  chapters_lesser?: Maybe<Scalars['Int']>
  volumes_greater?: Maybe<Scalars['Int']>
  volumes_lesser?: Maybe<Scalars['Int']>
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>
  averageScore_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  source_in?: Maybe<Array<Maybe<MediaSource>>>
  sort?: Maybe<Array<Maybe<MediaSort>>>
}

export type PageCharactersArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<CharacterSort>>>
}

export type PageStaffArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StaffSort>>>
}

export type PageStudiosArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StudioSort>>>
}

export type PageMediaListArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  type?: Maybe<MediaType>
  status?: Maybe<MediaListStatus>
  mediaId?: Maybe<Scalars['Int']>
  isFollowing?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  startedAt?: Maybe<Scalars['FuzzyDateInt']>
  completedAt?: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList?: Maybe<Scalars['Boolean']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not?: Maybe<MediaListStatus>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like?: Maybe<Scalars['String']>
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like?: Maybe<Scalars['String']>
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<MediaListSort>>>
}

export type PageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  airingAt?: Maybe<Scalars['Int']>
  notYetAired?: Maybe<Scalars['Boolean']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not?: Maybe<Scalars['Int']>
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  airingAt_greater?: Maybe<Scalars['Int']>
  airingAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<AiringSort>>>
}

export type PageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>
  date?: Maybe<Scalars['Int']>
  trending?: Maybe<Scalars['Int']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  releasing?: Maybe<Scalars['Boolean']>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater?: Maybe<Scalars['Int']>
  date_lesser?: Maybe<Scalars['Int']>
  trending_greater?: Maybe<Scalars['Int']>
  trending_lesser?: Maybe<Scalars['Int']>
  trending_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  averageScore_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  episode_not?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>
}

export type PageNotificationsArgs = {
  type?: Maybe<NotificationType>
  resetNotificationCount?: Maybe<Scalars['Boolean']>
  type_in?: Maybe<Array<Maybe<NotificationType>>>
}

export type PageFollowersArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type PageFollowingArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type PageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  messengerId?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  isFollowing?: Maybe<Scalars['Boolean']>
  hasReplies?: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Int']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not?: Maybe<Scalars['Int']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not?: Maybe<Scalars['Int']>
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not?: Maybe<ActivityType>
  type_in?: Maybe<Array<Maybe<ActivityType>>>
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater?: Maybe<Scalars['Int']>
  createdAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ActivitySort>>>
}

export type PageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>
  activityId?: Maybe<Scalars['Int']>
}

export type PageThreadsArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  replyUserId?: Maybe<Scalars['Int']>
  subscribed?: Maybe<Scalars['Boolean']>
  categoryId?: Maybe<Scalars['Int']>
  mediaCategoryId?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<ThreadSort>>>
}

export type PageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>
  threadId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
}

export type PageReviewsArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  mediaType?: Maybe<MediaType>
  sort?: Maybe<Array<Maybe<ReviewSort>>>
}

export type PageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  mediaRecommendationId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  rating?: Maybe<Scalars['Int']>
  onList?: Maybe<Scalars['Boolean']>
  rating_greater?: Maybe<Scalars['Int']>
  rating_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<RecommendationSort>>>
}

export type PageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>
  type?: Maybe<LikeableType>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  total?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  lastPage?: Maybe<Scalars['Int']>
  hasNextPage?: Maybe<Scalars['Boolean']>
}

export type ParsedMarkdown = {
  __typename?: 'ParsedMarkdown'
  html?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  Page?: Maybe<Page>
  Media?: Maybe<Media>
  MediaTrend?: Maybe<MediaTrend>
  AiringSchedule?: Maybe<AiringSchedule>
  Character?: Maybe<Character>
  Staff?: Maybe<Staff>
  MediaList?: Maybe<MediaList>
  MediaListCollection?: Maybe<MediaListCollection>
  GenreCollection?: Maybe<Array<Maybe<Scalars['String']>>>
  MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>
  User?: Maybe<User>
  Viewer?: Maybe<User>
  Notification?: Maybe<NotificationUnion>
  Studio?: Maybe<Studio>
  Review?: Maybe<Review>
  Activity?: Maybe<ActivityUnion>
  ActivityReply?: Maybe<ActivityReply>
  Following?: Maybe<User>
  Follower?: Maybe<User>
  Thread?: Maybe<Thread>
  ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>
  Recommendation?: Maybe<Recommendation>
  Like?: Maybe<User>
  Markdown?: Maybe<ParsedMarkdown>
  AniChartUser?: Maybe<AniChartUser>
  SiteStatistics?: Maybe<SiteStatistics>
}

export type QueryPageArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type QueryMediaArgs = {
  id?: Maybe<Scalars['Int']>
  idMal?: Maybe<Scalars['Int']>
  startDate?: Maybe<Scalars['FuzzyDateInt']>
  endDate?: Maybe<Scalars['FuzzyDateInt']>
  season?: Maybe<MediaSeason>
  seasonYear?: Maybe<Scalars['Int']>
  type?: Maybe<MediaType>
  format?: Maybe<MediaFormat>
  status?: Maybe<MediaStatus>
  episodes?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  chapters?: Maybe<Scalars['Int']>
  volumes?: Maybe<Scalars['Int']>
  isAdult?: Maybe<Scalars['Boolean']>
  genre?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  minimumTagRank?: Maybe<Scalars['Int']>
  tagCategory?: Maybe<Scalars['String']>
  onList?: Maybe<Scalars['Boolean']>
  licensedBy?: Maybe<Scalars['String']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  source?: Maybe<MediaSource>
  countryOfOrigin?: Maybe<Scalars['CountryCode']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not?: Maybe<Scalars['Int']>
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startDate_like?: Maybe<Scalars['String']>
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>
  endDate_like?: Maybe<Scalars['String']>
  format_in?: Maybe<Array<Maybe<MediaFormat>>>
  format_not?: Maybe<MediaFormat>
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>
  status_in?: Maybe<Array<Maybe<MediaStatus>>>
  status_not?: Maybe<MediaStatus>
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater?: Maybe<Scalars['Int']>
  episodes_lesser?: Maybe<Scalars['Int']>
  duration_greater?: Maybe<Scalars['Int']>
  duration_lesser?: Maybe<Scalars['Int']>
  chapters_greater?: Maybe<Scalars['Int']>
  chapters_lesser?: Maybe<Scalars['Int']>
  volumes_greater?: Maybe<Scalars['Int']>
  volumes_lesser?: Maybe<Scalars['Int']>
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>
  averageScore_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  source_in?: Maybe<Array<Maybe<MediaSource>>>
  sort?: Maybe<Array<Maybe<MediaSort>>>
}

export type QueryMediaTrendArgs = {
  mediaId?: Maybe<Scalars['Int']>
  date?: Maybe<Scalars['Int']>
  trending?: Maybe<Scalars['Int']>
  averageScore?: Maybe<Scalars['Int']>
  popularity?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  releasing?: Maybe<Scalars['Boolean']>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater?: Maybe<Scalars['Int']>
  date_lesser?: Maybe<Scalars['Int']>
  trending_greater?: Maybe<Scalars['Int']>
  trending_lesser?: Maybe<Scalars['Int']>
  trending_not?: Maybe<Scalars['Int']>
  averageScore_greater?: Maybe<Scalars['Int']>
  averageScore_lesser?: Maybe<Scalars['Int']>
  averageScore_not?: Maybe<Scalars['Int']>
  popularity_greater?: Maybe<Scalars['Int']>
  popularity_lesser?: Maybe<Scalars['Int']>
  popularity_not?: Maybe<Scalars['Int']>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  episode_not?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>
}

export type QueryAiringScheduleArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  episode?: Maybe<Scalars['Int']>
  airingAt?: Maybe<Scalars['Int']>
  notYetAired?: Maybe<Scalars['Boolean']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not?: Maybe<Scalars['Int']>
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater?: Maybe<Scalars['Int']>
  episode_lesser?: Maybe<Scalars['Int']>
  airingAt_greater?: Maybe<Scalars['Int']>
  airingAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<AiringSort>>>
}

export type QueryCharacterArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<CharacterSort>>>
}

export type QueryStaffArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StaffSort>>>
}

export type QueryMediaListArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  type?: Maybe<MediaType>
  status?: Maybe<MediaListStatus>
  mediaId?: Maybe<Scalars['Int']>
  isFollowing?: Maybe<Scalars['Boolean']>
  notes?: Maybe<Scalars['String']>
  startedAt?: Maybe<Scalars['FuzzyDateInt']>
  completedAt?: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList?: Maybe<Scalars['Boolean']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not?: Maybe<MediaListStatus>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like?: Maybe<Scalars['String']>
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like?: Maybe<Scalars['String']>
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<MediaListSort>>>
}

export type QueryMediaListCollectionArgs = {
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  type?: Maybe<MediaType>
  status?: Maybe<MediaListStatus>
  notes?: Maybe<Scalars['String']>
  startedAt?: Maybe<Scalars['FuzzyDateInt']>
  completedAt?: Maybe<Scalars['FuzzyDateInt']>
  forceSingleCompletedList?: Maybe<Scalars['Boolean']>
  chunk?: Maybe<Scalars['Int']>
  perChunk?: Maybe<Scalars['Int']>
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>
  status_not?: Maybe<MediaListStatus>
  notes_like?: Maybe<Scalars['String']>
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like?: Maybe<Scalars['String']>
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<MediaListSort>>>
}

export type QueryMediaTagCollectionArgs = {
  status?: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type QueryNotificationArgs = {
  type?: Maybe<NotificationType>
  resetNotificationCount?: Maybe<Scalars['Boolean']>
  type_in?: Maybe<Array<Maybe<NotificationType>>>
}

export type QueryStudioArgs = {
  id?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<StudioSort>>>
}

export type QueryReviewArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  mediaType?: Maybe<MediaType>
  sort?: Maybe<Array<Maybe<ReviewSort>>>
}

export type QueryActivityArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  messengerId?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  isFollowing?: Maybe<Scalars['Boolean']>
  hasReplies?: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Int']>
  id_not?: Maybe<Scalars['Int']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not?: Maybe<Scalars['Int']>
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not?: Maybe<Scalars['Int']>
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not?: Maybe<Scalars['Int']>
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not?: Maybe<ActivityType>
  type_in?: Maybe<Array<Maybe<ActivityType>>>
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater?: Maybe<Scalars['Int']>
  createdAt_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ActivitySort>>>
}

export type QueryActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>
  activityId?: Maybe<Scalars['Int']>
}

export type QueryFollowingArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type QueryFollowerArgs = {
  userId: Scalars['Int']
  sort?: Maybe<Array<Maybe<UserSort>>>
}

export type QueryThreadArgs = {
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  replyUserId?: Maybe<Scalars['Int']>
  subscribed?: Maybe<Scalars['Boolean']>
  categoryId?: Maybe<Scalars['Int']>
  mediaCategoryId?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sort?: Maybe<Array<Maybe<ThreadSort>>>
}

export type QueryThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>
  threadId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>
}

export type QueryRecommendationArgs = {
  id?: Maybe<Scalars['Int']>
  mediaId?: Maybe<Scalars['Int']>
  mediaRecommendationId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  rating?: Maybe<Scalars['Int']>
  onList?: Maybe<Scalars['Boolean']>
  rating_greater?: Maybe<Scalars['Int']>
  rating_lesser?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<RecommendationSort>>>
}

export type QueryLikeArgs = {
  likeableId?: Maybe<Scalars['Int']>
  type?: Maybe<LikeableType>
}

export type QueryMarkdownArgs = {
  markdown: Scalars['String']
}

export type Recommendation = {
  __typename?: 'Recommendation'
  id: Scalars['Int']
  rating?: Maybe<Scalars['Int']>
  userRating?: Maybe<RecommendationRating>
  media?: Maybe<Media>
  mediaRecommendation?: Maybe<Media>
  user?: Maybe<User>
}

export type RecommendationConnection = {
  __typename?: 'RecommendationConnection'
  edges?: Maybe<Array<Maybe<RecommendationEdge>>>
  nodes?: Maybe<Array<Maybe<Recommendation>>>
  pageInfo?: Maybe<PageInfo>
}

export type RecommendationEdge = {
  __typename?: 'RecommendationEdge'
  node?: Maybe<Recommendation>
}

export enum RecommendationRating {
  NoRating = 'NO_RATING',
  RateUp = 'RATE_UP',
  RateDown = 'RATE_DOWN'
}

export enum RecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC'
}

export type RelatedMediaAdditionNotification = {
  __typename?: 'RelatedMediaAdditionNotification'
  id: Scalars['Int']
  type?: Maybe<NotificationType>
  mediaId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  media?: Maybe<Media>
}

export type Report = {
  __typename?: 'Report'
  id: Scalars['Int']
  reporter?: Maybe<User>
  reported?: Maybe<User>
  reason?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
}

export type Review = {
  __typename?: 'Review'
  id: Scalars['Int']
  userId: Scalars['Int']
  mediaId: Scalars['Int']
  mediaType?: Maybe<MediaType>
  summary?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['Int']>
  ratingAmount?: Maybe<Scalars['Int']>
  userRating?: Maybe<ReviewRating>
  score?: Maybe<Scalars['Int']>
  private?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
  updatedAt: Scalars['Int']
  user?: Maybe<User>
  media?: Maybe<Media>
}

export type ReviewBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type ReviewConnection = {
  __typename?: 'ReviewConnection'
  edges?: Maybe<Array<Maybe<ReviewEdge>>>
  nodes?: Maybe<Array<Maybe<Review>>>
  pageInfo?: Maybe<PageInfo>
}

export type ReviewEdge = {
  __typename?: 'ReviewEdge'
  node?: Maybe<Review>
}

export enum ReviewRating {
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE',
  DownVote = 'DOWN_VOTE'
}

export enum ReviewSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type RevisionHistory = {
  __typename?: 'RevisionHistory'
  id: Scalars['Int']
  action?: Maybe<RevisionHistoryAction>
  changes?: Maybe<Scalars['Json']>
  user?: Maybe<User>
  media?: Maybe<Media>
  character?: Maybe<Character>
  staff?: Maybe<Staff>
  studio?: Maybe<Studio>
  createdAt?: Maybe<Scalars['Int']>
}

export enum RevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT'
}

export type ScoreDistribution = {
  __typename?: 'ScoreDistribution'
  score?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
}

export enum ScoreFormat {
  Point_100 = 'POINT_100',
  Point_10Decimal = 'POINT_10_DECIMAL',
  Point_10 = 'POINT_10',
  Point_5 = 'POINT_5',
  Point_3 = 'POINT_3'
}

export type SiteStatistics = {
  __typename?: 'SiteStatistics'
  users?: Maybe<SiteTrendConnection>
  anime?: Maybe<SiteTrendConnection>
  manga?: Maybe<SiteTrendConnection>
  characters?: Maybe<SiteTrendConnection>
  staff?: Maybe<SiteTrendConnection>
  studios?: Maybe<SiteTrendConnection>
  reviews?: Maybe<SiteTrendConnection>
}

export type SiteStatisticsUsersArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsAnimeArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsMangaArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsCharactersArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsStaffArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsStudiosArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteStatisticsReviewsArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type SiteTrend = {
  __typename?: 'SiteTrend'
  date: Scalars['Int']
  count: Scalars['Int']
  change: Scalars['Int']
}

export type SiteTrendConnection = {
  __typename?: 'SiteTrendConnection'
  edges?: Maybe<Array<Maybe<SiteTrendEdge>>>
  nodes?: Maybe<Array<Maybe<SiteTrend>>>
  pageInfo?: Maybe<PageInfo>
}

export type SiteTrendEdge = {
  __typename?: 'SiteTrendEdge'
  node?: Maybe<SiteTrend>
}

export enum SiteTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC'
}

export type Staff = {
  __typename?: 'Staff'
  id: Scalars['Int']
  name?: Maybe<StaffName>
  language?: Maybe<StaffLanguage>
  image?: Maybe<StaffImage>
  description?: Maybe<Scalars['String']>
  isFavourite: Scalars['Boolean']
  siteUrl?: Maybe<Scalars['String']>
  staffMedia?: Maybe<MediaConnection>
  characters?: Maybe<CharacterConnection>
  updatedAt?: Maybe<Scalars['Int']>
  staff?: Maybe<Staff>
  submitter?: Maybe<User>
  submissionStatus?: Maybe<Scalars['Int']>
  submissionNotes?: Maybe<Scalars['String']>
  favourites?: Maybe<Scalars['Int']>
  modNotes?: Maybe<Scalars['String']>
}

export type StaffDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type StaffStaffMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>
  type?: Maybe<MediaType>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type StaffCharactersArgs = {
  sort?: Maybe<Array<Maybe<CharacterSort>>>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type StaffConnection = {
  __typename?: 'StaffConnection'
  edges?: Maybe<Array<Maybe<StaffEdge>>>
  nodes?: Maybe<Array<Maybe<Staff>>>
  pageInfo?: Maybe<PageInfo>
}

export type StaffEdge = {
  __typename?: 'StaffEdge'
  node?: Maybe<Staff>
  id?: Maybe<Scalars['Int']>
  role?: Maybe<Scalars['String']>
  favouriteOrder?: Maybe<Scalars['Int']>
}

export type StaffImage = {
  __typename?: 'StaffImage'
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
}

export enum StaffLanguage {
  Japanese = 'JAPANESE',
  English = 'ENGLISH',
  Korean = 'KOREAN',
  Italian = 'ITALIAN',
  Spanish = 'SPANISH',
  Portuguese = 'PORTUGUESE',
  French = 'FRENCH',
  German = 'GERMAN',
  Hebrew = 'HEBREW',
  Hungarian = 'HUNGARIAN'
}

export type StaffName = {
  __typename?: 'StaffName'
  first?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['String']>
  full?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type StaffNameInput = {
  first?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum StaffSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

export type StaffStats = {
  __typename?: 'StaffStats'
  staff?: Maybe<Staff>
  amount?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
  timeWatched?: Maybe<Scalars['Int']>
}

export type StaffSubmission = {
  __typename?: 'StaffSubmission'
  id: Scalars['Int']
  staff?: Maybe<Staff>
  submission?: Maybe<Staff>
  submitter?: Maybe<User>
  status?: Maybe<SubmissionStatus>
  notes?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
}

export type StatusDistribution = {
  __typename?: 'StatusDistribution'
  status?: Maybe<MediaListStatus>
  amount?: Maybe<Scalars['Int']>
}

export type Studio = {
  __typename?: 'Studio'
  id: Scalars['Int']
  name: Scalars['String']
  isAnimationStudio: Scalars['Boolean']
  media?: Maybe<MediaConnection>
  siteUrl?: Maybe<Scalars['String']>
  isFavourite: Scalars['Boolean']
  favourites?: Maybe<Scalars['Int']>
}

export type StudioMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>
  isMain?: Maybe<Scalars['Boolean']>
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type StudioConnection = {
  __typename?: 'StudioConnection'
  edges?: Maybe<Array<Maybe<StudioEdge>>>
  nodes?: Maybe<Array<Maybe<Studio>>>
  pageInfo?: Maybe<PageInfo>
}

export type StudioEdge = {
  __typename?: 'StudioEdge'
  node?: Maybe<Studio>
  id?: Maybe<Scalars['Int']>
  isMain: Scalars['Boolean']
  favouriteOrder?: Maybe<Scalars['Int']>
}

export enum StudioSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

export type StudioStats = {
  __typename?: 'StudioStats'
  studio?: Maybe<Studio>
  amount?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
  timeWatched?: Maybe<Scalars['Int']>
}

export enum SubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export enum SubmissionStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Accepted = 'ACCEPTED'
}

export type TagStats = {
  __typename?: 'TagStats'
  tag?: Maybe<MediaTag>
  amount?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
  timeWatched?: Maybe<Scalars['Int']>
}

export type TextActivity = {
  __typename?: 'TextActivity'
  id: Scalars['Int']
  userId?: Maybe<Scalars['Int']>
  type?: Maybe<ActivityType>
  replyCount: Scalars['Int']
  text?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  isLocked?: Maybe<Scalars['Boolean']>
  isSubscribed?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['Int']
  user?: Maybe<User>
  replies?: Maybe<Array<Maybe<ActivityReply>>>
  likes?: Maybe<Array<Maybe<User>>>
}

export type TextActivityTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type Thread = {
  __typename?: 'Thread'
  id: Scalars['Int']
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  userId: Scalars['Int']
  replyUserId?: Maybe<Scalars['Int']>
  replyCommentId?: Maybe<Scalars['Int']>
  replyCount?: Maybe<Scalars['Int']>
  viewCount?: Maybe<Scalars['Int']>
  isLocked?: Maybe<Scalars['Boolean']>
  isSticky?: Maybe<Scalars['Boolean']>
  isSubscribed?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  repliedAt?: Maybe<Scalars['Int']>
  createdAt: Scalars['Int']
  updatedAt: Scalars['Int']
  user?: Maybe<User>
  replyUser?: Maybe<User>
  likes?: Maybe<Array<Maybe<User>>>
  siteUrl?: Maybe<Scalars['String']>
  categories?: Maybe<Array<Maybe<ThreadCategory>>>
  mediaCategories?: Maybe<Array<Maybe<Media>>>
}

export type ThreadBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type ThreadCategory = {
  __typename?: 'ThreadCategory'
  id: Scalars['Int']
  name: Scalars['String']
}

export type ThreadComment = {
  __typename?: 'ThreadComment'
  id: Scalars['Int']
  userId?: Maybe<Scalars['Int']>
  threadId?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  likeCount: Scalars['Int']
  isLiked?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
  updatedAt: Scalars['Int']
  thread?: Maybe<Thread>
  user?: Maybe<User>
  likes?: Maybe<Array<Maybe<User>>>
  childComments?: Maybe<Scalars['Json']>
}

export type ThreadCommentCommentArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type ThreadCommentLikeNotification = {
  __typename?: 'ThreadCommentLikeNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  commentId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  thread?: Maybe<Thread>
  comment?: Maybe<ThreadComment>
  user?: Maybe<User>
}

export type ThreadCommentMentionNotification = {
  __typename?: 'ThreadCommentMentionNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  commentId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  thread?: Maybe<Thread>
  comment?: Maybe<ThreadComment>
  user?: Maybe<User>
}

export type ThreadCommentReplyNotification = {
  __typename?: 'ThreadCommentReplyNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  commentId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  thread?: Maybe<Thread>
  comment?: Maybe<ThreadComment>
  user?: Maybe<User>
}

export enum ThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

export type ThreadCommentSubscribedNotification = {
  __typename?: 'ThreadCommentSubscribedNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  commentId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  thread?: Maybe<Thread>
  comment?: Maybe<ThreadComment>
  user?: Maybe<User>
}

export type ThreadLikeNotification = {
  __typename?: 'ThreadLikeNotification'
  id: Scalars['Int']
  userId: Scalars['Int']
  type?: Maybe<NotificationType>
  threadId: Scalars['Int']
  context?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  thread?: Maybe<Thread>
  comment?: Maybe<ThreadComment>
  user?: Maybe<User>
}

export enum ThreadSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC',
  IsSticky = 'IS_STICKY',
  SearchMatch = 'SEARCH_MATCH'
}

export type User = {
  __typename?: 'User'
  id: Scalars['Int']
  name: Scalars['String']
  about?: Maybe<Scalars['String']>
  avatar?: Maybe<UserAvatar>
  bannerImage?: Maybe<Scalars['String']>
  isFollowing?: Maybe<Scalars['Boolean']>
  isFollower?: Maybe<Scalars['Boolean']>
  isBlocked?: Maybe<Scalars['Boolean']>
  bans?: Maybe<Scalars['Json']>
  options?: Maybe<UserOptions>
  mediaListOptions?: Maybe<MediaListOptions>
  favourites?: Maybe<Favourites>
  statistics?: Maybe<UserStatisticTypes>
  unreadNotificationCount?: Maybe<Scalars['Int']>
  siteUrl?: Maybe<Scalars['String']>
  donatorTier?: Maybe<Scalars['Int']>
  donatorBadge?: Maybe<Scalars['String']>
  moderatorStatus?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Int']>
  stats?: Maybe<UserStats>
}

export type UserAboutArgs = {
  asHtml?: Maybe<Scalars['Boolean']>
}

export type UserFavouritesArgs = {
  page?: Maybe<Scalars['Int']>
}

export type UserActivityHistory = {
  __typename?: 'UserActivityHistory'
  date?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
  level?: Maybe<Scalars['Int']>
}

export type UserAvatar = {
  __typename?: 'UserAvatar'
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
}

export type UserCountryStatistic = {
  __typename?: 'UserCountryStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  country?: Maybe<Scalars['CountryCode']>
}

export type UserFormatStatistic = {
  __typename?: 'UserFormatStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  format?: Maybe<MediaFormat>
}

export type UserGenreStatistic = {
  __typename?: 'UserGenreStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  genre?: Maybe<Scalars['String']>
}

export type UserLengthStatistic = {
  __typename?: 'UserLengthStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  length?: Maybe<Scalars['String']>
}

export type UserModData = {
  __typename?: 'UserModData'
  alts?: Maybe<Array<Maybe<User>>>
  bans?: Maybe<Scalars['Json']>
  ip?: Maybe<Scalars['Json']>
  counts?: Maybe<Scalars['Json']>
}

export type UserOptions = {
  __typename?: 'UserOptions'
  titleLanguage?: Maybe<UserTitleLanguage>
  displayAdultContent?: Maybe<Scalars['Boolean']>
  airingNotifications?: Maybe<Scalars['Boolean']>
  profileColor?: Maybe<Scalars['String']>
  notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>
}

export type UserReleaseYearStatistic = {
  __typename?: 'UserReleaseYearStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  releaseYear?: Maybe<Scalars['Int']>
}

export type UserScoreStatistic = {
  __typename?: 'UserScoreStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  score?: Maybe<Scalars['Int']>
}

export enum UserSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC',
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  SearchMatch = 'SEARCH_MATCH'
}

export type UserStaffStatistic = {
  __typename?: 'UserStaffStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  staff?: Maybe<Staff>
}

export type UserStartYearStatistic = {
  __typename?: 'UserStartYearStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  startYear?: Maybe<Scalars['Int']>
}

export type UserStatistics = {
  __typename?: 'UserStatistics'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  standardDeviation: Scalars['Float']
  minutesWatched: Scalars['Int']
  episodesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  volumesRead: Scalars['Int']
  formats?: Maybe<Array<Maybe<UserFormatStatistic>>>
  statuses?: Maybe<Array<Maybe<UserStatusStatistic>>>
  scores?: Maybe<Array<Maybe<UserScoreStatistic>>>
  lengths?: Maybe<Array<Maybe<UserLengthStatistic>>>
  releaseYears?: Maybe<Array<Maybe<UserReleaseYearStatistic>>>
  startYears?: Maybe<Array<Maybe<UserStartYearStatistic>>>
  genres?: Maybe<Array<Maybe<UserGenreStatistic>>>
  tags?: Maybe<Array<Maybe<UserTagStatistic>>>
  countries?: Maybe<Array<Maybe<UserCountryStatistic>>>
  voiceActors?: Maybe<Array<Maybe<UserVoiceActorStatistic>>>
  staff?: Maybe<Array<Maybe<UserStaffStatistic>>>
  studios?: Maybe<Array<Maybe<UserStudioStatistic>>>
}

export type UserStatisticsFormatsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStatusesArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsScoresArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsLengthsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsReleaseYearsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStartYearsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsGenresArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsTagsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsCountriesArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsVoiceActorsArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStaffArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStudiosArgs = {
  limit?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export enum UserStatisticsSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC'
}

export type UserStatisticTypes = {
  __typename?: 'UserStatisticTypes'
  anime?: Maybe<UserStatistics>
  manga?: Maybe<UserStatistics>
}

export type UserStats = {
  __typename?: 'UserStats'
  watchedTime?: Maybe<Scalars['Int']>
  chaptersRead?: Maybe<Scalars['Int']>
  activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>
  animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
  mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>
  animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
  mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>
  animeListScores?: Maybe<ListScoreStats>
  mangaListScores?: Maybe<ListScoreStats>
  favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>
  favouredGenres?: Maybe<Array<Maybe<GenreStats>>>
  favouredTags?: Maybe<Array<Maybe<TagStats>>>
  favouredActors?: Maybe<Array<Maybe<StaffStats>>>
  favouredStaff?: Maybe<Array<Maybe<StaffStats>>>
  favouredStudios?: Maybe<Array<Maybe<StudioStats>>>
  favouredYears?: Maybe<Array<Maybe<YearStats>>>
  favouredFormats?: Maybe<Array<Maybe<FormatStats>>>
}

export type UserStatusStatistic = {
  __typename?: 'UserStatusStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  status?: Maybe<MediaListStatus>
}

export type UserStudioStatistic = {
  __typename?: 'UserStudioStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  studio?: Maybe<Studio>
}

export type UserTagStatistic = {
  __typename?: 'UserTagStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  tag?: Maybe<MediaTag>
}

export enum UserTitleLanguage {
  Romaji = 'ROMAJI',
  English = 'ENGLISH',
  Native = 'NATIVE',
  RomajiStylised = 'ROMAJI_STYLISED',
  EnglishStylised = 'ENGLISH_STYLISED',
  NativeStylised = 'NATIVE_STYLISED'
}

export type UserVoiceActorStatistic = {
  __typename?: 'UserVoiceActorStatistic'
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  voiceActor?: Maybe<Staff>
  characterIds: Array<Maybe<Scalars['Int']>>
}

export type YearStats = {
  __typename?: 'YearStats'
  year?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
  meanScore?: Maybe<Scalars['Int']>
}
