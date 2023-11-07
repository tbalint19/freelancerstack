import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app_user" */
export type App_User = {
  __typename?: 'app_user';
  id: Scalars['Int'];
  /** An array relationship */
  memberships: Array<App_User_In_Channel>;
  /** An aggregate relationship */
  memberships_aggregate: App_User_In_Channel_Aggregate;
  username: Scalars['String'];
};


/** columns and relationships of "app_user" */
export type App_UserMembershipsArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


/** columns and relationships of "app_user" */
export type App_UserMemberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};

/** aggregated selection of "app_user" */
export type App_User_Aggregate = {
  __typename?: 'app_user_aggregate';
  aggregate?: Maybe<App_User_Aggregate_Fields>;
  nodes: Array<App_User>;
};

/** aggregate fields of "app_user" */
export type App_User_Aggregate_Fields = {
  __typename?: 'app_user_aggregate_fields';
  avg?: Maybe<App_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<App_User_Max_Fields>;
  min?: Maybe<App_User_Min_Fields>;
  stddev?: Maybe<App_User_Stddev_Fields>;
  stddev_pop?: Maybe<App_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<App_User_Stddev_Samp_Fields>;
  sum?: Maybe<App_User_Sum_Fields>;
  var_pop?: Maybe<App_User_Var_Pop_Fields>;
  var_samp?: Maybe<App_User_Var_Samp_Fields>;
  variance?: Maybe<App_User_Variance_Fields>;
};


/** aggregate fields of "app_user" */
export type App_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type App_User_Avg_Fields = {
  __typename?: 'app_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "app_user". All fields are combined with a logical 'AND'. */
export type App_User_Bool_Exp = {
  _and?: InputMaybe<Array<App_User_Bool_Exp>>;
  _not?: InputMaybe<App_User_Bool_Exp>;
  _or?: InputMaybe<Array<App_User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  memberships?: InputMaybe<App_User_In_Channel_Bool_Exp>;
  memberships_aggregate?: InputMaybe<App_User_In_Channel_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_user" */
export enum App_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppUserPkey = 'app_user_pkey'
}

/** columns and relationships of "app_user_in_channel" */
export type App_User_In_Channel = {
  __typename?: 'app_user_in_channel';
  /** An object relationship */
  app_user: App_User;
  app_user_id: Scalars['Int'];
  /** An object relationship */
  channel: Channel;
  channel_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
};


/** columns and relationships of "app_user_in_channel" */
export type App_User_In_ChannelMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "app_user_in_channel" */
export type App_User_In_ChannelMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "app_user_in_channel" */
export type App_User_In_Channel_Aggregate = {
  __typename?: 'app_user_in_channel_aggregate';
  aggregate?: Maybe<App_User_In_Channel_Aggregate_Fields>;
  nodes: Array<App_User_In_Channel>;
};

export type App_User_In_Channel_Aggregate_Bool_Exp = {
  count?: InputMaybe<App_User_In_Channel_Aggregate_Bool_Exp_Count>;
};

export type App_User_In_Channel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_User_In_Channel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app_user_in_channel" */
export type App_User_In_Channel_Aggregate_Fields = {
  __typename?: 'app_user_in_channel_aggregate_fields';
  avg?: Maybe<App_User_In_Channel_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<App_User_In_Channel_Max_Fields>;
  min?: Maybe<App_User_In_Channel_Min_Fields>;
  stddev?: Maybe<App_User_In_Channel_Stddev_Fields>;
  stddev_pop?: Maybe<App_User_In_Channel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<App_User_In_Channel_Stddev_Samp_Fields>;
  sum?: Maybe<App_User_In_Channel_Sum_Fields>;
  var_pop?: Maybe<App_User_In_Channel_Var_Pop_Fields>;
  var_samp?: Maybe<App_User_In_Channel_Var_Samp_Fields>;
  variance?: Maybe<App_User_In_Channel_Variance_Fields>;
};


/** aggregate fields of "app_user_in_channel" */
export type App_User_In_Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app_user_in_channel" */
export type App_User_In_Channel_Aggregate_Order_By = {
  avg?: InputMaybe<App_User_In_Channel_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_User_In_Channel_Max_Order_By>;
  min?: InputMaybe<App_User_In_Channel_Min_Order_By>;
  stddev?: InputMaybe<App_User_In_Channel_Stddev_Order_By>;
  stddev_pop?: InputMaybe<App_User_In_Channel_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<App_User_In_Channel_Stddev_Samp_Order_By>;
  sum?: InputMaybe<App_User_In_Channel_Sum_Order_By>;
  var_pop?: InputMaybe<App_User_In_Channel_Var_Pop_Order_By>;
  var_samp?: InputMaybe<App_User_In_Channel_Var_Samp_Order_By>;
  variance?: InputMaybe<App_User_In_Channel_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app_user_in_channel" */
export type App_User_In_Channel_Arr_Rel_Insert_Input = {
  data: Array<App_User_In_Channel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_User_In_Channel_On_Conflict>;
};

/** aggregate avg on columns */
export type App_User_In_Channel_Avg_Fields = {
  __typename?: 'app_user_in_channel_avg_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Avg_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app_user_in_channel". All fields are combined with a logical 'AND'. */
export type App_User_In_Channel_Bool_Exp = {
  _and?: InputMaybe<Array<App_User_In_Channel_Bool_Exp>>;
  _not?: InputMaybe<App_User_In_Channel_Bool_Exp>;
  _or?: InputMaybe<Array<App_User_In_Channel_Bool_Exp>>;
  app_user?: InputMaybe<App_User_Bool_Exp>;
  app_user_id?: InputMaybe<Int_Comparison_Exp>;
  channel?: InputMaybe<Channel_Bool_Exp>;
  channel_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "app_user_in_channel" */
export enum App_User_In_Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppUserInChannelPkey = 'app_user_in_channel_pkey'
}

/** input type for incrementing numeric columns in table "app_user_in_channel" */
export type App_User_In_Channel_Inc_Input = {
  app_user_id?: InputMaybe<Scalars['Int']>;
  channel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_user_in_channel" */
export type App_User_In_Channel_Insert_Input = {
  app_user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  app_user_id?: InputMaybe<Scalars['Int']>;
  channel?: InputMaybe<Channel_Obj_Rel_Insert_Input>;
  channel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type App_User_In_Channel_Max_Fields = {
  __typename?: 'app_user_in_channel_max_fields';
  app_user_id?: Maybe<Scalars['Int']>;
  channel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Max_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_User_In_Channel_Min_Fields = {
  __typename?: 'app_user_in_channel_min_fields';
  app_user_id?: Maybe<Scalars['Int']>;
  channel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Min_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app_user_in_channel" */
export type App_User_In_Channel_Mutation_Response = {
  __typename?: 'app_user_in_channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_User_In_Channel>;
};

/** input type for inserting object relation for remote table "app_user_in_channel" */
export type App_User_In_Channel_Obj_Rel_Insert_Input = {
  data: App_User_In_Channel_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_User_In_Channel_On_Conflict>;
};

/** on_conflict condition type for table "app_user_in_channel" */
export type App_User_In_Channel_On_Conflict = {
  constraint: App_User_In_Channel_Constraint;
  update_columns?: Array<App_User_In_Channel_Update_Column>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "app_user_in_channel". */
export type App_User_In_Channel_Order_By = {
  app_user?: InputMaybe<App_User_Order_By>;
  app_user_id?: InputMaybe<Order_By>;
  channel?: InputMaybe<Channel_Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
};

/** primary key columns input for table: app_user_in_channel */
export type App_User_In_Channel_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "app_user_in_channel" */
export enum App_User_In_Channel_Select_Column {
  /** column name */
  AppUserId = 'app_user_id',
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "app_user_in_channel" */
export type App_User_In_Channel_Set_Input = {
  app_user_id?: InputMaybe<Scalars['Int']>;
  channel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type App_User_In_Channel_Stddev_Fields = {
  __typename?: 'app_user_in_channel_stddev_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Stddev_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_User_In_Channel_Stddev_Pop_Fields = {
  __typename?: 'app_user_in_channel_stddev_pop_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Stddev_Pop_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_User_In_Channel_Stddev_Samp_Fields = {
  __typename?: 'app_user_in_channel_stddev_samp_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Stddev_Samp_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "app_user_in_channel" */
export type App_User_In_Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_User_In_Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_User_In_Channel_Stream_Cursor_Value_Input = {
  app_user_id?: InputMaybe<Scalars['Int']>;
  channel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type App_User_In_Channel_Sum_Fields = {
  __typename?: 'app_user_in_channel_sum_fields';
  app_user_id?: Maybe<Scalars['Int']>;
  channel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Sum_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "app_user_in_channel" */
export enum App_User_In_Channel_Update_Column {
  /** column name */
  AppUserId = 'app_user_id',
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  Id = 'id'
}

export type App_User_In_Channel_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<App_User_In_Channel_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_User_In_Channel_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_User_In_Channel_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_User_In_Channel_Var_Pop_Fields = {
  __typename?: 'app_user_in_channel_var_pop_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Var_Pop_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_User_In_Channel_Var_Samp_Fields = {
  __typename?: 'app_user_in_channel_var_samp_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Var_Samp_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_User_In_Channel_Variance_Fields = {
  __typename?: 'app_user_in_channel_variance_fields';
  app_user_id?: Maybe<Scalars['Float']>;
  channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "app_user_in_channel" */
export type App_User_In_Channel_Variance_Order_By = {
  app_user_id?: InputMaybe<Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "app_user" */
export type App_User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_user" */
export type App_User_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memberships?: InputMaybe<App_User_In_Channel_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_User_Max_Fields = {
  __typename?: 'app_user_max_fields';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_User_Min_Fields = {
  __typename?: 'app_user_min_fields';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app_user" */
export type App_User_Mutation_Response = {
  __typename?: 'app_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_User>;
};

/** input type for inserting object relation for remote table "app_user" */
export type App_User_Obj_Rel_Insert_Input = {
  data: App_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};

/** on_conflict condition type for table "app_user" */
export type App_User_On_Conflict = {
  constraint: App_User_Constraint;
  update_columns?: Array<App_User_Update_Column>;
  where?: InputMaybe<App_User_Bool_Exp>;
};

/** Ordering options when selecting data from "app_user". */
export type App_User_Order_By = {
  id?: InputMaybe<Order_By>;
  memberships_aggregate?: InputMaybe<App_User_In_Channel_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_user */
export type App_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "app_user" */
export enum App_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "app_user" */
export type App_User_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type App_User_Stddev_Fields = {
  __typename?: 'app_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type App_User_Stddev_Pop_Fields = {
  __typename?: 'app_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type App_User_Stddev_Samp_Fields = {
  __typename?: 'app_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "app_user" */
export type App_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type App_User_Sum_Fields = {
  __typename?: 'app_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "app_user" */
export enum App_User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

export type App_User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<App_User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_User_Var_Pop_Fields = {
  __typename?: 'app_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type App_User_Var_Samp_Fields = {
  __typename?: 'app_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type App_User_Variance_Fields = {
  __typename?: 'app_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "channel" */
export type Channel = {
  __typename?: 'channel';
  /** An array relationship */
  app_users: Array<App_User_In_Channel>;
  /** An aggregate relationship */
  app_users_aggregate: App_User_In_Channel_Aggregate;
  id: Scalars['Int'];
};


/** columns and relationships of "channel" */
export type ChannelApp_UsersArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


/** columns and relationships of "channel" */
export type ChannelApp_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};

/** aggregated selection of "channel" */
export type Channel_Aggregate = {
  __typename?: 'channel_aggregate';
  aggregate?: Maybe<Channel_Aggregate_Fields>;
  nodes: Array<Channel>;
};

/** aggregate fields of "channel" */
export type Channel_Aggregate_Fields = {
  __typename?: 'channel_aggregate_fields';
  avg?: Maybe<Channel_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Channel_Max_Fields>;
  min?: Maybe<Channel_Min_Fields>;
  stddev?: Maybe<Channel_Stddev_Fields>;
  stddev_pop?: Maybe<Channel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channel_Stddev_Samp_Fields>;
  sum?: Maybe<Channel_Sum_Fields>;
  var_pop?: Maybe<Channel_Var_Pop_Fields>;
  var_samp?: Maybe<Channel_Var_Samp_Fields>;
  variance?: Maybe<Channel_Variance_Fields>;
};


/** aggregate fields of "channel" */
export type Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Channel_Avg_Fields = {
  __typename?: 'channel_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Bool_Exp>>;
  _not?: InputMaybe<Channel_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Bool_Exp>>;
  app_users?: InputMaybe<App_User_In_Channel_Bool_Exp>;
  app_users_aggregate?: InputMaybe<App_User_In_Channel_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChannelPkey = 'channel_pkey'
}

/** input type for incrementing numeric columns in table "channel" */
export type Channel_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "channel" */
export type Channel_Insert_Input = {
  app_users?: InputMaybe<App_User_In_Channel_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'channel_max_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'channel_min_fields';
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "channel" */
export type Channel_Mutation_Response = {
  __typename?: 'channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel>;
};

/** input type for inserting object relation for remote table "channel" */
export type Channel_Obj_Rel_Insert_Input = {
  data: Channel_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};

/** on_conflict condition type for table "channel" */
export type Channel_On_Conflict = {
  constraint: Channel_Constraint;
  update_columns?: Array<Channel_Update_Column>;
  where?: InputMaybe<Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "channel". */
export type Channel_Order_By = {
  app_users_aggregate?: InputMaybe<App_User_In_Channel_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel */
export type Channel_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "channel" */
export type Channel_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Channel_Stddev_Fields = {
  __typename?: 'channel_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Channel_Stddev_Pop_Fields = {
  __typename?: 'channel_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Channel_Stddev_Samp_Fields = {
  __typename?: 'channel_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "channel" */
export type Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Channel_Sum_Fields = {
  __typename?: 'channel_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "channel" */
export enum Channel_Update_Column {
  /** column name */
  Id = 'id'
}

export type Channel_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Channel_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Set_Input>;
  /** filter the rows which have to be updated */
  where: Channel_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Channel_Var_Pop_Fields = {
  __typename?: 'channel_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Channel_Var_Samp_Fields = {
  __typename?: 'channel_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Channel_Variance_Fields = {
  __typename?: 'channel_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  app_user_in_channel_id?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  member?: Maybe<App_User_In_Channel>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  app_user_in_channel_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  member?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = 'message_pkey'
}

/** input type for incrementing numeric columns in table "message" */
export type Message_Inc_Input = {
  app_user_in_channel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  app_user_in_channel_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  member?: InputMaybe<App_User_In_Channel_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  app_user_in_channel_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  app_user_in_channel_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<App_User_In_Channel_Order_By>;
};

/** primary key columns input for table: message */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  AppUserInChannelId = 'app_user_in_channel_id',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  app_user_in_channel_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  app_user_in_channel_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  app_user_in_channel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  AppUserInChannelId = 'app_user_in_channel_id',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

export type Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  app_user_in_channel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  app_user_in_channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app_user" */
  delete_app_user?: Maybe<App_User_Mutation_Response>;
  /** delete single row from the table: "app_user" */
  delete_app_user_by_pk?: Maybe<App_User>;
  /** delete data from the table: "app_user_in_channel" */
  delete_app_user_in_channel?: Maybe<App_User_In_Channel_Mutation_Response>;
  /** delete single row from the table: "app_user_in_channel" */
  delete_app_user_in_channel_by_pk?: Maybe<App_User_In_Channel>;
  /** delete data from the table: "channel" */
  delete_channel?: Maybe<Channel_Mutation_Response>;
  /** delete single row from the table: "channel" */
  delete_channel_by_pk?: Maybe<Channel>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** insert data into the table: "app_user" */
  insert_app_user?: Maybe<App_User_Mutation_Response>;
  /** insert data into the table: "app_user_in_channel" */
  insert_app_user_in_channel?: Maybe<App_User_In_Channel_Mutation_Response>;
  /** insert a single row into the table: "app_user_in_channel" */
  insert_app_user_in_channel_one?: Maybe<App_User_In_Channel>;
  /** insert a single row into the table: "app_user" */
  insert_app_user_one?: Maybe<App_User>;
  /** insert data into the table: "channel" */
  insert_channel?: Maybe<Channel_Mutation_Response>;
  /** insert a single row into the table: "channel" */
  insert_channel_one?: Maybe<Channel>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** update data of the table: "app_user" */
  update_app_user?: Maybe<App_User_Mutation_Response>;
  /** update single row of the table: "app_user" */
  update_app_user_by_pk?: Maybe<App_User>;
  /** update data of the table: "app_user_in_channel" */
  update_app_user_in_channel?: Maybe<App_User_In_Channel_Mutation_Response>;
  /** update single row of the table: "app_user_in_channel" */
  update_app_user_in_channel_by_pk?: Maybe<App_User_In_Channel>;
  /** update multiples rows of table: "app_user_in_channel" */
  update_app_user_in_channel_many?: Maybe<Array<Maybe<App_User_In_Channel_Mutation_Response>>>;
  /** update multiples rows of table: "app_user" */
  update_app_user_many?: Maybe<Array<Maybe<App_User_Mutation_Response>>>;
  /** update data of the table: "channel" */
  update_channel?: Maybe<Channel_Mutation_Response>;
  /** update single row of the table: "channel" */
  update_channel_by_pk?: Maybe<Channel>;
  /** update multiples rows of table: "channel" */
  update_channel_many?: Maybe<Array<Maybe<Channel_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_App_UserArgs = {
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_App_User_In_ChannelArgs = {
  where: App_User_In_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_User_In_Channel_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ChannelArgs = {
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_App_UserArgs = {
  objects: Array<App_User_Insert_Input>;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_User_In_ChannelArgs = {
  objects: Array<App_User_In_Channel_Insert_Input>;
  on_conflict?: InputMaybe<App_User_In_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_User_In_Channel_OneArgs = {
  object: App_User_In_Channel_Insert_Input;
  on_conflict?: InputMaybe<App_User_In_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_User_OneArgs = {
  object: App_User_Insert_Input;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChannelArgs = {
  objects: Array<Channel_Insert_Input>;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_OneArgs = {
  object: Channel_Insert_Input;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_App_UserArgs = {
  _inc?: InputMaybe<App_User_Inc_Input>;
  _set?: InputMaybe<App_User_Set_Input>;
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_By_PkArgs = {
  _inc?: InputMaybe<App_User_Inc_Input>;
  _set?: InputMaybe<App_User_Set_Input>;
  pk_columns: App_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_In_ChannelArgs = {
  _inc?: InputMaybe<App_User_In_Channel_Inc_Input>;
  _set?: InputMaybe<App_User_In_Channel_Set_Input>;
  where: App_User_In_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_In_Channel_By_PkArgs = {
  _inc?: InputMaybe<App_User_In_Channel_Inc_Input>;
  _set?: InputMaybe<App_User_In_Channel_Set_Input>;
  pk_columns: App_User_In_Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_In_Channel_ManyArgs = {
  updates: Array<App_User_In_Channel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_ManyArgs = {
  updates: Array<App_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelArgs = {
  _inc?: InputMaybe<Channel_Inc_Input>;
  _set?: InputMaybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_By_PkArgs = {
  _inc?: InputMaybe<Channel_Inc_Input>;
  _set?: InputMaybe<Channel_Set_Input>;
  pk_columns: Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_ManyArgs = {
  updates: Array<Channel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app_user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app_user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table: "app_user_in_channel" */
  app_user_in_channel: Array<App_User_In_Channel>;
  /** fetch aggregated fields from the table: "app_user_in_channel" */
  app_user_in_channel_aggregate: App_User_In_Channel_Aggregate;
  /** fetch data from the table: "app_user_in_channel" using primary key columns */
  app_user_in_channel_by_pk?: Maybe<App_User_In_Channel>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
};


export type Query_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootApp_User_In_ChannelArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


export type Query_RootApp_User_In_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


export type Query_RootApp_User_In_Channel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app_user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app_user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table: "app_user_in_channel" */
  app_user_in_channel: Array<App_User_In_Channel>;
  /** fetch aggregated fields from the table: "app_user_in_channel" */
  app_user_in_channel_aggregate: App_User_In_Channel_Aggregate;
  /** fetch data from the table: "app_user_in_channel" using primary key columns */
  app_user_in_channel_by_pk?: Maybe<App_User_In_Channel>;
  /** fetch data from the table in a streaming manner: "app_user_in_channel" */
  app_user_in_channel_stream: Array<App_User_In_Channel>;
  /** fetch data from the table in a streaming manner: "app_user" */
  app_user_stream: Array<App_User>;
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table in a streaming manner: "channel" */
  channel_stream: Array<Channel>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
};


export type Subscription_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootApp_User_In_ChannelArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


export type Subscription_RootApp_User_In_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_In_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_In_Channel_Order_By>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


export type Subscription_RootApp_User_In_Channel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootApp_User_In_Channel_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_User_In_Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<App_User_In_Channel_Bool_Exp>;
};


export type Subscription_RootApp_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_User_Stream_Cursor_Input>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChannel_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_app_user_one?: { __typename?: 'app_user', id: number } | null };

export type GetUsersQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUsersQuery = { __typename?: 'query_root', app_user: Array<{ __typename?: 'app_user', id: number, username: string }> };

export type StartChannelMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type StartChannelMutation = { __typename?: 'mutation_root', insert_channel?: { __typename?: 'channel_mutation_response', affected_rows: number } | null };

export type SendMessageMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'mutation_root', insert_message_one?: { __typename?: 'message', id: number } | null };

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'query_root', message: Array<{ __typename?: 'message', content: string }> };


export const AddUserDocument = gql`
    mutation AddUser($username: String!) {
  insert_app_user_one(object: {username: $username}) {
    id
  }
}
    `;
export const GetUsersDocument = gql`
    query GetUsers($username: String!) {
  app_user(where: {username: {_eq: $username}}) {
    id
    username
  }
}
    `;
export const StartChannelDocument = gql`
    mutation StartChannel($id: Int!) {
  insert_channel(objects: {app_users: {data: {app_user_id: $id}}}) {
    affected_rows
  }
}
    `;
export const SendMessageDocument = gql`
    mutation SendMessage($content: String!) {
  insert_message_one(object: {content: $content, app_user_in_channel_id: 1}) {
    id
  }
}
    `;
export const GetMessagesDocument = gql`
    query GetMessages {
  message {
    content
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddUser(variables: AddUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserMutation>(AddUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddUser', 'mutation');
    },
    GetUsers(variables: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    StartChannel(variables: StartChannelMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StartChannelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StartChannelMutation>(StartChannelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StartChannel', 'mutation');
    },
    SendMessage(variables: SendMessageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendMessageMutation>(SendMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SendMessage', 'mutation');
    },
    GetMessages(variables?: GetMessagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesQuery>(GetMessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMessages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;