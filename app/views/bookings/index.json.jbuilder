json.array!(@bookings) do |booking|
  json.extract! booking, :id, :user_id, :room_id, :start_time, :duration
  json.url booking_url(booking, format: :json)
end
