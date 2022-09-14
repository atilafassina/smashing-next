import {
  BaseClientOptions,
  buildClient,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "todos",
    columns: [
      { name: "message", type: "string" },
      { name: "is_done", type: "bool" },
      { name: "created_at", type: "datetime" },
      { name: "user", type: "link", link: { table: "users" } },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "slug", type: "string", unique: true },
      { name: "photo", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type DatabaseSchema = SchemaInference<SchemaTables>;

export type Todos = DatabaseSchema["todos"];
export type TodosRecord = Todos & XataRecord;

export type Users = DatabaseSchema["users"];
export type UsersRecord = Users & XataRecord;

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://atila-r3s7jg.xata.sh/db/smashingnext",
};

export class XataClient extends DatabaseClient<SchemaTables> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;
export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
