# frozen_string_literal: true

class PositionReflex < ApplicationReflex
  def insert_at(sgid, new_position)
    record = GlobalID::Locator.locate_signed(sgid)
    record.insert_at(new_position)
    10.times do
      puts new_position
    end
    morph :nothing
  end
end
