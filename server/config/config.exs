# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :hw09,
  ecto_repos: [Hw09.Repo]

# Configures the endpoint
config :hw09, Hw09Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "jKkzkokdQ0btGSGUoyUgi32YwJru1TOmKlLPrTM4Va3Uqx54kRF5O+UtJNM4hzHh",
  render_errors: [view: Hw09Web.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Hw09.PubSub,
  live_view: [signing_salt: "ZlUxRpCX"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
