# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Hw09.Repo.insert!(%Hw09.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Hw09.Repo
alias Hw09.Users.User
alias Hw09.Events.Event

defmodule Inject do
  def user(name, email, pass) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, email: email, password_hash: hash})
  end
end

sam = Inject.user("Sam", "s@sol.com", "test1")
samantha = Inject.user("Samantha", "ss@soul.com", "test2")

Repo.insert!(%Event{user_id: sam.id, name: "Sam buys Pillows", when: ~D[2023-09-18], description: "Sam is lame and needs some cute throw pillows to be less lame" })
Repo.insert!(%Event{user_id: samantha.id, name: "Walk Dogs", when: ~D[2023-02-03], description: "Everyone gathers as many dogs as possible and we walk ALL of them at once" })
