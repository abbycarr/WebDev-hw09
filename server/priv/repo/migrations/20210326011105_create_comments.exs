defmodule Hw09.Repo.Migrations.CreateComments do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :body, :text, null: false
      add :event_id, references(:events, on_delete: :nothing), null: false
      add :user_id, references(:users, on_delete: :nothing), null: false

      timestamps()
    end

    create index(:comments, [:event_id, :user_id], unique: true)
    create index(:comments, [:event_id])
    create index(:comments, [:user_id])
  end
end
