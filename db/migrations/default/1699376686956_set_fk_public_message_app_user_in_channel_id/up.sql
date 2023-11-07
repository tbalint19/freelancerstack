alter table "public"."message"
  add constraint "message_app_user_in_channel_id_fkey"
  foreign key ("app_user_in_channel_id")
  references "public"."app_user_in_channel"
  ("id") on update restrict on delete restrict;
