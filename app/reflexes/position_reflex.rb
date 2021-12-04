# frozen_string_literal: true

class PositionReflex < ApplicationReflex
  def insert_at(sgid, new_position)
    record = GlobalID::Locator.locate_signed(sgid)

    puts 'PARAMS', params, nil, nil, nil
    record.insert_at(new_position)

    morph :nothing
  end
end
