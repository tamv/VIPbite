class Details < ActiveRecord::Base
	attr_accessible :detailId, :promo, :promoDetail, :reservation, :operatinghour, :detaillink, :comment, :imgFolder, :urbanspoon, :urbanspoonreview

	def self.AddDetail(params)
		remove = Details.find_by(detailId: params[:Id])
		remove.destroy if (remove != nil)

		Details.create(
			:detailId		=> params[:Id],
			:promo			=> params[:promo_Name],
			:promoDetail	=> params[:detail],
			:reservation	=> params[:reservation],
			:operatinghour	=> params[:storehour],
			:restaurantlink	=> params[:restaurantLink],
			:comment		=> params[:extracomment],
			:imgFolder		=> params[:imagesFolder],
			:urbanspoon		=> params[:urbanspoonlink],
			:urbanspoonreview => params[:reviewpercentage],
			)
	end
end
