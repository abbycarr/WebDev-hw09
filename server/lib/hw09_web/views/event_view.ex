defmodule Hw09Web.EventView do
  use Hw09Web, :view
  alias Hw09Web.EventView
  alias Hw09Web.UserView

  def render("index.json", %{events: events}) do
    %{data: render_many(events, EventView, "event.json")}
  end

  def render("show.json", %{event: event}) do
    %{data: render_one(event, EventView, "event.json")}
  end

  def render("event.json", %{event: event}) do
    %{id: event.id,
      name: event.name,
      when: event.when,
      description: event.description,
      user: render_one(event.user, UserView, "user.json")
    }
  end
end
